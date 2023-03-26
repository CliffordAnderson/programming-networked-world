import os
import glob
import openai
import re
import sys

# Set OpenAI API key
openai.api_key = os.getenv('OPENAI_API_KEY')

def summarize_file(file_path):
    with open(file_path, 'r') as file:
        file_content = file.read()

    # Set prompt
    prompt = f"Please summarize the following text as if you were the instructor of the course giving an introduction to the lesson you are about to teach. The summary should be three paragraphs long. Provide the results as a markdown file with a title, highlighting any key terms in italics. Also provide a list of the five key takeaways from the lecture as a bulleted list using a secondary heading 'Key takeaways from this lesson': \n{file_content}\n"

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )

    summary = response.choices[0].message.content.strip()
    return summary

def save_summary(file_path, summary):
    summary_file_path = os.path.splitext(file_path)[0] + '.md'

    with open(summary_file_path, 'w') as file:
        file.write(summary)

def find_text_files(directory_path):
    markdown_files = []

    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith(".txt"):
                file_path = os.path.join(root, file)
                markdown_files.append(file_path)

    return markdown_files

def main(directory_path):
    markdown_files = find_text_files(directory_path)

    for file_path in markdown_files:
        print(f"Summarizing {file_path}")

        summary = summarize_file(file_path)
        save_summary(file_path, summary)

        print(f"Summary saved at {os.path.splitext(file_path)[0]}.md")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python summarize.py [directory_path]")
        sys.exit(1)

    directory_path = sys.argv[1]
    main(directory_path)
