import sys
from bs4 import BeautifulSoup

def parse_html_to_md(input_file, output_file='preguntas.md'):
    with open(input_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    blocks = soup.select('.question-block')
    md_lines = []

    for block in blocks:
        # Extraer número y texto de la pregunta
        title = block.find('h3').text.strip()
        num = ''.join(filter(str.isdigit, title.split(':')[0]))
        question_text = title.split(':', 1)[1].strip()
        md_lines.append(f"{num}.  {question_text}")

        # Obtener la respuesta correcta
        script_tag = block.find('script')
        correct = ''
        if script_tag:
            script_text = script_tag.string
            if script_text and 'answer_q' in script_text:
                correct = script_text.split('=')[-1].strip().strip("';")

        # Opciones de respuesta
        for li in block.select('li'):
            input_tag = li.find('input')
            letter = input_tag.get('value')
            label = li.find('label').get_text(strip=True)
            checked = '(x)' if letter == correct else '( )'
            md_lines.append(f"    - {checked} {label}")

        md_lines.append("")  # Línea en blanco entre preguntas

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(md_lines))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python html_to_md_checkbox.py preguntas.html")
        sys.exit(1)
    parse_html_to_md(sys.argv[1])
