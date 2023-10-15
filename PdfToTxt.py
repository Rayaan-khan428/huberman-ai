import os
import fitz  # PyMuPDF


def process_pdfs(folder_path):

    # print(fitz.__doc__)fitz

    for filename in os.listdir(folder_path):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(folder_path, filename)
            pdf_document = fitz.open(pdf_path)
            output_text = ""

            # Start reading from page 3 (0-indexed)
            for page_number in range(3, pdf_document.page_count):
                page = pdf_document.load_page(page_number)
                page_text = page.get_text()

                # If the disclaimer is found, start extracting text from the next page

                for subsequent_page_number in range(page_number + 1, pdf_document.page_count):
                    subsequent_page = pdf_document.load_page(subsequent_page_number)
                    subsequent_page_text = subsequent_page.get_text()
                    # Remove header text
                    cleaned_text = subsequent_page_text.replace("Transcribed by readthatpodcast.com", "")
                    output_text += cleaned_text + "\n"


            # Save the cleaned text to a new file
            output_filename = filename.replace(".pdf", ".txt")
            output_path = os.path.join('PDFs/processed_text', output_filename)
            with open(output_path, "w") as output_file:
                output_file.write(output_text)

            # Close the PDF document
            print(f"{output_filename} saved")
            pdf_document.close()


# Specify the folder containing the PDFs
folder_path = "PDFs"
process_pdfs(folder_path)
