import re
import random

# ========= CONFIGURACIÓN =========
ASIGNATURA = "Contabilidad Financiera II"
AUTOR = "Ismael Sallami Moreno"
TITULACION = "Ingeniería Informática + ADE"
TITULO_TEST = "Test CF2"

input_md = 'preguntas.md'
output_html = 'test.html'

def escape_double_angle_brackets(text):
    return re.sub(r'<<|>>', lambda m: '&lt;&lt;' if m.group() == '<<' else '&gt;&gt;', text)

with open(input_md, 'r', encoding='utf-8') as f:
    md_content = f.read()

md_content = re.sub(r'<!--.*?-->', '', md_content, flags=re.DOTALL)

pattern = re.compile(r'(\d+)\.\s*(.*?)((?:\n\s*-\s*\((x|\s|\(\))\)\s*.*?)+)(?=\n\d+\.|\Z)', re.DOTALL)
option_pattern = re.compile(r'-\s*\((x|\s|\(\))\)\s*(.*?)\n', re.DOTALL)

questions_data = []
for match in pattern.finditer(md_content):
    _, question_text, options_block, _ = match.groups()
    question_text_clean = question_text.strip()
    options = option_pattern.findall(options_block + "\n")
    options_cleaned = [(mark.strip("() "), opt.strip()) for mark, opt in options]
    correct_indexes = [i for i, (mark, _) in enumerate(options_cleaned) if mark == 'x']
    questions_data.append({
        'question_raw': question_text_clean,
        'options_raw': options_cleaned,
        'correct': correct_indexes
    })

random.shuffle(questions_data)

# ========= PLANTILLA HTML =========
html_template_start = f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{TITULO_TEST}</title>
<style>
body {{ font-family: 'Palatino Linotype', serif; background-color: #f0f2f5; color: #333; line-height: 1.6; padding: 20px; font-size: 18px; }}
h1 {{ text-align: center; color: #007bff; margin-bottom: 10px; }}
.author {{ text-align: center; margin-bottom: 20px; font-size: 16px; font-style: italic; }}
.question {{ background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
.question:hover {{ transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }}
.correct {{ border-color: #28a745; background-color: #d4edda; }}
.partial {{ border-color: #ffc107; background-color: #fff3cd; }}
.incorrect {{ border-color: #dc3545; background-color: #f8d7da; }}
input[type="checkbox"] {{ margin-right: 10px; transform: scale(1.2); }}
button {{ margin: 10px; padding: 10px 20px; font-size: 16px; border-radius: 8px; cursor: pointer; }}
.info-box {{
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}}
</style>
</head>
<body>
<h1>Test {ASIGNATURA}</h1>
<div class="author">Autor: {AUTOR} | Titulación: {TITULACION}</div>

<div class="info-box">
<ul>
  <li>Estos tests están diseñados para ayudar a repasar y autoevaluar los conocimientos adquiridos en la asignatura.</li>
  <li>Permiten identificar áreas de mejora antes de los exámenes oficiales.</li>
  <li>Facilitan la práctica activa y la comprobación inmediata de respuestas correctas.</li>
  <li>Proceden de diversas fuentes, por lo que pueden ser candidatas a errores, por lo que si se detecta alguno, se agradecerá su notificación.</li>
  <li>El test se puede desordenar y mostrar las respuestas correctas.</li>
  <li> Puede haber preguntas con más de una respuesta correcta, son aquellas en las cuales al seleccionar una de las correctas se colorea de color amarillo (parcialmente correcta). </li>
</ul>
<button id="more-options-btn">Más opciones</button>
<div id="extra-buttons" style="display:none;">
  <button onclick="shuffleQuestions()">Desordenar preguntas</button>
  <button onclick="showCorrectAnswers()">Mostrar todas las correctas</button>
</div>
</div>

<div id="questions-container">
'''

html_questions = ''
for idx, q in enumerate(questions_data, 1):
    question_html = escape_double_angle_brackets(q['question_raw'])
    html_questions += f'<div class="question" id="q{idx}" data-correct="{",".join(str(i) for i in q["correct"])}">\n'
    html_questions += f'<p>{idx}. {question_html}</p>\n<ol type="a">\n'
    for opt_idx, (_, opt_text) in enumerate(q['options_raw']):
        opt_html = escape_double_angle_brackets(opt_text)
        html_questions += f'<li><label><input type="checkbox" name="q{idx}" value="{opt_idx}"> {opt_html}</label></li>\n'
    html_questions += '</ol>\n</div>\n'

html_template_end = '''
</div>

<script>
document.querySelectorAll('.question').forEach(q => {
  const correct = q.dataset.correct.split(',').map(Number);
  const checkboxes = q.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(checkboxes).map((c, i) => c.checked ? i : null).filter(i => i !== null);
      q.classList.remove('correct', 'partial', 'incorrect');
      const allCorrect = correct.every(i => checked.includes(i));
      const onlyCorrect = checked.every(i => correct.includes(i));
      if (checked.length === 0) {
        // Ninguna opción marcada: estado neutral
        q.classList.remove('correct', 'partial', 'incorrect');
        } else if (allCorrect && onlyCorrect) {
        q.classList.add('correct');
        } else if (checked.some(i => correct.includes(i)) && onlyCorrect === true) {
        q.classList.add('partial');
        } else {
        q.classList.add('incorrect');
        }
    });
  });
});

document.getElementById('more-options-btn').addEventListener('click', function() {
  document.getElementById('extra-buttons').style.display = 'block';
  this.style.display = 'none';
});

function shuffleQuestions() {
  const container = document.getElementById('questions-container');
  const questions = Array.from(container.children);
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.appendChild(questions[j]);
  }
  renumberQuestions();
}

function renumberQuestions() {
  const questions = document.querySelectorAll('.question');
  questions.forEach((q, idx) => {
    const p = q.querySelector('p');
    p.innerHTML = p.innerHTML.replace(/^\\d+\\./, (idx + 1) + '.');
    const inputs = q.querySelectorAll('input');
    inputs.forEach(inp => {
      inp.name = 'q' + (idx + 1);
    });
  });
}

function showCorrectAnswers() {
  document.querySelectorAll('.question').forEach(q => {
    const correct = q.dataset.correct.split(',').map(Number);
    const checkboxes = q.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb, i) => {
      cb.checked = correct.includes(i);
    });
    q.classList.remove('correct', 'partial', 'incorrect');
    q.classList.add('correct');
  });
}
</script>
</body>
</html>'''

# Guardar archivo final
final_html = html_template_start + html_questions + html_template_end
with open(output_html, 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"Archivo '{output_html}' generado con éxito.")
