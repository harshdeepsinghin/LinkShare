#!/bin/bash
set -e

echo "Packaging LinkShare..."

# Clean previous builds
rm -rf firefox_dist LinkShare-Chrome.zip LinkShare-Firefox.zip

# Prepare Firefox distribution
mkdir -p firefox_dist
cp background.js popup.js popup.css popup.html options.html options.css options.js firefox_dist/
cp -r icons firefox_dist/
cp manifest.firefox.json firefox_dist/manifest.json

# Zip Chrome (MV3)
echo "Creating Chrome zip..."
zip -q -r LinkShare-Chrome.zip . -x "*.git*" ".github/*" "node_modules/*" "*.DS_Store" "manifest.firefox.json" "firefox_dist/*" "bump_version.sh" "package.sh" "__MACOSX/*" ".*"

# Zip Firefox (MV2)
echo "Creating Firefox zip..."
cd firefox_dist
zip -q -r ../LinkShare-Firefox.zip . -x "*.DS_Store" "__MACOSX/*" ".*"
cd ..

echo "✅ Done!"
echo "Files created:"
echo "- LinkShare-Chrome.zip"
echo "- LinkShare-Firefox.zip"
