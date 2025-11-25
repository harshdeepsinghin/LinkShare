#!/usr/bin/env fish
# Generate extension icons from `icons/logoshare.png` using sips (macOS)
# Usage: ./scripts/gen-icons.fish

set src icons/logoshare.png
set out_dir icons

if not test -f $src
    echo "Source file $src not found. Please place your logo at $src"
    exit 1
end

sips -z 128 128 $src --out $out_dir/icon128.png
sips -z 48 48 $src --out $out_dir/icon48.png
sips -z 16 16 $src --out $out_dir/icon16.png

echo "Generated icons: icon16.png, icon48.png, icon128.png in $out_dir"