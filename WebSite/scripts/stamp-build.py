#!/usr/bin/env python3
# stamp-build.py — Updates build date watermark in all HTML pages.
# Run after any site edits before committing/deploying.
# Usage: python stamp-build.sh  (or just ./stamp-build.sh with python3 on PATH)

import os
import re
from datetime import date

BUILD_DATE = date.today().strftime("%B %d, %Y")
STAMP_SPAN = f'      <span id="build-stamp">Created By: Stewart Rogers &bull; Built: {BUILD_DATE}</span>'
STAMP_RE = re.compile(r'      <span id="build-stamp">.*?</span>\n', re.DOTALL)

wwwroot = os.path.join(os.path.dirname(__file__), '..', 'wwwroot')

updated = []
for fname in sorted(os.listdir(wwwroot)):
    if not fname.endswith('.html'):
        continue
    path = os.path.join(wwwroot, fname)
    with open(path, encoding='utf-8') as f:
        html = f.read()

    if 'id="build-stamp"' in html:
        # Update existing stamp date
        new_html = STAMP_RE.sub(STAMP_SPAN + '\n', html)
    else:
        # Insert before the container </div> that precedes </footer>
        # Handles both indented and inline footer-bottom formats, and any whitespace
        new_html = re.sub(
            r'(\n[ \t]*</div>\n[ \t]*</footer>)',
            f'\n{STAMP_SPAN}\\1',
            html,
            count=1
        )

    if new_html != html:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_html)
        updated.append(fname)

print(f"Build stamp updated ({BUILD_DATE}): {len(updated)} file(s)")
for f in updated:
    print(f"  {f}")
