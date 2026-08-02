#!/usr/bin/env python3
"""Strips the leading number from Markdown headings.

Notes typed from a syllabus tend to carry its numbering: `## 2.1 Existencias`.
Pandoc numbers the sections itself, so that leaves every heading numbered twice
in the PDF. This removes the written number and lets the template do it.

    ## 2.1 Existencias   ->   ## Existencias

Writes a `.bak` next to each file it changes, and prints every line it touched.

Usage:

    python3 build/scripts/clean-md-headers.py Subjects/Second/SO/src/*.md

@author Ismael Sallami Moreno
"""

import re
import sys
import shutil

def clean(path):
    pattern = re.compile(r'^(#{1,6})\s+\d+(?:\.\d+)*\s*[.)\-]?\s+')
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changes = []
    for i, line in enumerate(lines, 1):
        new = pattern.sub(r"\1 ", line)
        if new != line:
            changes.append((i, line.rstrip('\n'), new.rstrip('\n')))
        new_lines.append(new)

    if changes:
        bak = path + '.bak'
        shutil.copy2(path, bak)
        with open(path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

    for i, old, new in changes:
        print(f"L{i}: - {old}")
        print(f"     + {new}")

    print(f"\nModified {len(changes)} lines in {path}. Backup: {bak if changes else 'none'}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: clean-md-headers.py file1 [file2 ...]')
        sys.exit(1)
    for p in sys.argv[1:]:
        clean(p)
