import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import subprocess
subprocess.run(['pip', 'install', 'pypdf2', '--quiet'], capture_output=True)
import PyPDF2
reader = PyPDF2.PdfReader(r'c:\Users\brend\Downloads\Glorifli-landing-page\Design\Optimization\glorifli_ai_website_playbook.pdf')
for i, page in enumerate(reader.pages):
    print(f"=== PAGE {i+1} ===")
    text = page.extract_text()
    if text:
        print(text)
