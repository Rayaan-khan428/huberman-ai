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
                                                "you to determine the most relevant podcast that will best answer the "
                                                "users question"
                                                ". Provide me the exact podcast titles please follow the following format: "
                                                "{28 Maximizing Productivity Physical & Mental Health with Daily Tools Huberman Lab Podcast 28}"},
                  {"role": "user", "content": prompt}])

    # Extract the content from the response
    content = response['choices'][0]['message']['content']

    # since we are only using one episode right now
    return content

    # Split the content into lines
    # lines = content.split('\n')[1:]  # Skip the first line as it's an introductory sentence

    # Further process each line to extract the episode details
    # episodes = [line.split('. ')[1] for line in lines if line]  # Skip empty lines

    # return episodes


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

def is_timestamp_line(line):
    # A simple regex pattern to match timestamps, adjust if necessary
    pattern = re.compile(r'\d{1,2}:\d{2}(:\d{2})?')
    return bool(pattern.match(line.strip()))

def summarize_paragraphs(file_path="Final.txt"):
    # Read the file content
    with open(file_path, 'r') as file:
        lines = file.readlines()

    paragraphs = []
    paragraph = []
    for line in lines:
        stripped_line = line.strip()
        if stripped_line:  # If the line is not empty, add it to the current paragraph
            paragraph.append(stripped_line)
        elif paragraph:  # If the line is empty and the current paragraph is not empty, a new paragraph starts
            # If the last line of the paragraph is a timestamp, remove it
            if is_timestamp_line(paragraph[-1]):
                paragraph.pop()
            paragraphs.append(' '.join(paragraph))
            paragraph = []

    # Add the last paragraph if it's not empty
    if paragraph:
        paragraphs.append(' '.join(paragraph))

    # Summarize each paragraph
    summarized_paragraphs = []
    for paragraph in paragraphs:
        print('paragraph processed')
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Summarize this paragraph: \n"},
                    {"role": "user", "content": paragraph}])

        except Exception as e:
            print(f"Error summarizing paragraph: {e}")

    with open("Final.txt", 'w') as file:
        for summary in summarized_paragraphs:
            file.write(f"{summary}\n\n")  # Write each summary as a new

    print("iterated a new summary")

def main():

    relevant_podcasts = []

    folder_path = "PDFs"  # Replace with the path to your folder containing the PDFs
    question = input("Enter your question: ")

    podcast_titles = get_podcast_titles(folder_path)
    relevant_podcasts.append(get_relevant_podcasts(question, podcast_titles))

    # print("Most relevant podcasts:")
    # for i, title in enumerate(relevant_podcasts[:], start=1):
    #     print(f"{i}. {title}")

    print(f"the relevant podcast: {relevant_podcasts}")
    print(f"the length of relevant podcast: {len(relevant_podcasts)}")

    # combine(relevant_podcast)
    print("combined successfully")

    # content_tokenizer()
    summarize_paragraphs()


if __name__ == "__main__":
    main()