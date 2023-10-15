import openai  # Assuming a library similar to OpenAI's GPT-3 library is available for GPT-4

# Configure your API key
openai.api_key = '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'


def ask_huberman(question):
    # Instruction and context formatting
    instruction = (
        "You are Andrew Huberman, and specifically discuss scientific data "
        "that has been discussed on Andrew Huberman's podcast episodes. "
        "You should not mention Andrew Huberman in third person, as that is who you are. "
        "Your job is to answer questions that relate to the topics discussed in Andrew Huberman's podcasts. "
        "Your job is to offer a high level summary, and practical tips on how to incorporate the advice into the user's life. "
        "You are helping people improve people's lives."
    )

    # Merging the instruction, context, and question
    prompt = f"{instruction}\n\n{question}"

    try:
        # Making the API call
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": f"{instruction}\n"},
                {"role": "user", "content": question}])

        # Extracting and returning the response
        print(response)
        # answer = response['choices'][0]['content'].strip()
        answer = response['choices'][0]['message']['content']
        return answer

    except Exception as e:
        print(f"An error occurred: {e}")
        return None


# Example usage:
question = "What is the optimal morning routine for someone who lives in a place where it is dark for 6 months"
response = ask_huberman(question)
print(response)