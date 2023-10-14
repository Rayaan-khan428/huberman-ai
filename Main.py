import os
import re
import openai
from transformers import GPT2TokenizerFast
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

# Set your OpenAI API key
openai.api_key = "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"


def get_podcast_titles(folder_path):
    titles = []
    for file_name in os.listdir(folder_path):
        if file_name.endswith('.pdf'):
            # Assuming the title of the podcast is the name of the pdf file, without the .pdf extension
            title = file_name[:-4]
            titles.append(title)
    return titles


def get_relevant_podcasts(question, podcast_titles):
    # Construct the prompt to send to GPT-3
    prompt = f"The question: '{question}'?\n"
    prompt += '\n The podcast titles: \n'.join(podcast_titles)

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "I am providing you a list of podcast titles by Andrew Huberman, "
                                                "I would like"
                                                "you to determine the 5 relevant podcasts that will best answer the "
                                                "users question"
                                                ". Provide me the exact podcast titles"},
                  {"role": "user", "content": prompt}])

    # Extract the content from the response
    content = response['choices'][0]['message']['content']

    # Split the content into lines
    lines = content.split('\n')[1:]  # Skip the first line as it's an introductory sentence

    # Further process each line to extract the episode details
    episodes = [line.split('. ')[1] for line in lines if line]  # Skip empty lines

    return episodes


def combine(relevant_podcasts, input_dir="PDFs/processed_text", output_file_path="Final.txt"):
    """
    Combine the content of several text files into one big text file.

    Parameters:
    relevant_podcasts (list): List of podcast titles to be combined.
    input_dir (str): Directory where the text files are located.
    output_file_path (str): Path where the combined text file should be saved.
    """
    combined_text = ''  # Initialize an empty string to hold the combined text

    for podcast in relevant_podcasts:
        # Extract the numerical prefix from the podcast title
        match = re.match(r"(\d+)", podcast)
        if match:
            num_prefix = match.group(1)
            # Search for a file with a matching numerical prefix
            for file_name in os.listdir(input_dir):
                if file_name.startswith(num_prefix):
                    file_path = os.path.join(input_dir, file_name)
                    print(f'Found matching file: {file_name}')

                    # Read the content of the text file
                    with open(file_path, 'r') as file:
                        text = file.read()

                    # Append the content of the text file to the combined text, followed by a newline character
                    combined_text += text + '\n'
                    break  # Break out of the inner loop once a matching file is found
        else:
            print(f'No numerical prefix found in {podcast}')

    # Write the combined text to the output file
    with open(output_file_path, 'w') as file:
        file.write(combined_text)

    file.close()  # was causing glitches if we didn't close weridly


def content_tokenizer():
    # step  2: Open the file for tokenization
    with open('Final.txt', 'r') as f:
        text = f.read()

    # Step 3: Create function to count tokens
    tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")

    print(len(tokenizer.encode(text)))

    # Step 4: Split text into chunks
    text_splitter = RecursiveCharacterTextSplitter(

        chunk_size=216,
        chunk_overlap=42,
        length_function=len(tokenizer.encode(text)),
    )

    chunks = text_splitter.create_documents([text])

    type(chunks[0])

    # Get embedding model
    embeddings = OpenAIEmbeddings(openai_api_key="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")

    # Create vector database
    db = FAISS.from_documents(chunks, embeddings)

    chain = load_qa_chain(OpenAI(temperature=0), chain_type="stuff")

    query = "quit vaping"
    docs = db.similarity_search(query)

    print(chain.run(input_documents=docs, question=query))


def main():
    folder_path = "PDFs"  # Replace with the path to your folder containing the PDFs
    question = input("Enter your question: ")

    podcast_titles = get_podcast_titles(folder_path)
    relevant_podcasts = get_relevant_podcasts(question, podcast_titles)

    print("Top 5 relevant podcasts:")
    for i, title in enumerate(relevant_podcasts[::], start=1):
        print(f"{i}. {title}")
    print("\n\n")
    combine(relevant_podcasts)
    print("combined successfully")

    content_tokenizer()


if __name__ == "__main__":
    main()
