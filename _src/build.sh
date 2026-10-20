#!/bin/sh
# Пересобирает PDF резюме и картинку для соцсетей из исходников в этой папке.
# Запуск из корня репозитория: sh _src/build.sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="$ROOT/assets/razzhivin-resume.pdf" "file://$ROOT/_src/resume.html"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=15000 \
  --window-size=1200,630 --screenshot="$ROOT/assets/og-image.png" "file://$ROOT/_src/og-image.html"

echo "Готово: assets/razzhivin-resume.pdf и assets/og-image.png"
