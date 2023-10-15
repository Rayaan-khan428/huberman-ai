import os

# List of common grammatical words to filter out
STOP_WORDS = set([
    "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at",
    "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "could",
    "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", "further",
    "had", "has", "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself",
    "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it",
    "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "nor", "of", "on", "once", "only",
    "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "she'd", "she'll",
    "she's", "should", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them",
    "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this",
    "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "we'd", "we'll", "we're",
    "we've", "were", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's",
    "whom", "why", "why's", "with", "would", "you", "you'd", "you'll", "you're", "you've", "your", "yours",
    "yourself", "yourselves"
])

def filter_stop_words(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()
        filtered_lines = []

        for line in lines:
            words = line.split()
            filtered_words = [word for word in words if word.lower() not in STOP_WORDS]
            filtered_lines.append(' '.join(filtered_words))

        return '\n'.join(filtered_lines)

def process_directory(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.txt'):
                file_path = os.path.join(root, file)
                filtered_content = filter_stop_words(file_path)
                with open(file_path, 'w') as f:
                    f.write(filtered_content)

if __name__ == "__main__":
    directory_path = input("Enter the path of the directory: ")
    process_directory("PDFs/processed_text")
    print("Processing complete!")
