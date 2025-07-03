import random

def read_questions(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Separar por patrón: líneas que empiezan con un número y punto
    blocks = content.split('\n')
    questions = []
    current = []
    
    for line in blocks:
        if line.strip().startswith('1.') or line.strip().startswith('2.') or line.strip().startswith('3.') or line.strip().startswith('4.') or line.strip().startswith('5.'):
            if current:
                questions.append('\n'.join(current))
                current = []
        current.append(line)
    
    if current:
        questions.append('\n'.join(current))
    
    return questions

def shuffle_questions(questions):
    random.shuffle(questions)
    return questions

def write_shuffled_questions(filename, questions):
    with open(filename, 'w', encoding='utf-8') as f:
        for i, q in enumerate(questions, 1):
            # Reemplaza el número original por el nuevo orden
            q_lines = q.split('\n')
            if q_lines:
                q_lines[0] = q_lines[0].replace(q_lines[0][:q_lines[0].find('.')+1], f'{i}.')
            f.write('\n'.join(q_lines) + '\n\n')

# === USO ===
input_file = 'preguntas.md'        # Cambia esto por el nombre de tu archivo original
output_file = 'preguntas_random.md'  # Archivo de salida con preguntas mezcladas

questions = read_questions(input_file)
shuffled = shuffle_questions(questions)
write_shuffled_questions(output_file, shuffled)

print(f'Preguntas reordenadas guardadas en {output_file}')

