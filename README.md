# Huberman AI

This repository contains our project we created for Hack the Valley Hackathon at University of Toronto Scarborugh Campus

## Project Structure

### 1. Python Scripts for Data Processing:
These scripts are responsible for processing the podcast content, extracting relevant information, and interacting with the GPT-3 model.

PdfToTxt.py: Converts PDF files (presumably transcripts of podcasts) into text format.
filter.py: Filters out common grammatical words (stop words) from the text files.
gpt-prompt.py: Sets up a Flask web server that provides an endpoint for asking questions. It processes the questions using the GPT-3 model and returns the responses.
pdf.py: Contains functions to process and summarize the content of text files. It interacts with the OpenAI API to determine relevant podcast titles based on user queries.

### 2. React-based Web Application:
Located in the "huberman-ai" directory, this is the frontend of the project.
App.js: The main React component that sets up the structure of the web application. It includes components like Navbar, Sidebar, and content routes.
Components: Various React components like "about.js", "chat.js", "meetandrew.js", "navbar.js", and "sidebar.js" that make up different parts of the web application.

### 3. PDFs and Processed Text:
The repository contains a directory named "PDFs" which seems to have PDF files related to various topics from the Huberman Lab Podcast. The "processed_text" subdirectory contains the extracted content from these PDFs in text format.

## Getting Started

Working on this

## Usage



## Contributing

Umar Rasool - Web Developer worked on developing the frontend
