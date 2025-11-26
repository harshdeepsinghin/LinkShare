# LinkShare - Chrome Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

LinkShare is a lightweight Chrome extension that allows you to quickly share the current tab's URL to popular messaging apps like Telegram and WhatsApp. Perfect for sharing articles, videos, or any web content with friends and colleagues instantly.

## Features

- 🚀 **Instant Sharing**: Share the current tab URL with a single click
- 📱 **Multi-Platform Support**: Share to Telegram and WhatsApp
- 🎨 **Clean UI**: Simple and intuitive popup interface
- ⚡ **Fast Performance**: Lightweight and efficient
- 🔒 **Privacy Focused**: No data collection or tracking

## Installation

### Manual Installation (For Development)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `LinkShare` folder
5. The extension is now installed and ready to use!

## Usage

1. Click the LinkShare icon in your Chrome toolbar
2. Choose your preferred sharing platform (Telegram or WhatsApp)
3. The current tab's URL will be shared instantly

## Development

### Prerequisites
- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript

### Building Icons
The extension uses multiple icon sizes for different contexts. To generate them from the source logo:

```fish
# Using macOS sips
sips -z 128 128 icons/logoshare.png --out icons/icon128.png
sips -z 48 48 icons/logoshare.png --out icons/icon48.png
sips -z 16 16 icons/logoshare.png --out icons/icon16.png

# Or using the provided script
./scripts/gen-icons.fish
```

### Testing
1. Make changes to the code
2. Reload the extension in `chrome://extensions/`
3. Test the functionality

### Versioning and Releases

This project uses [release-please](https://github.com/google-github-actions/release-please-action) for automated versioning and releases. To trigger a new release:

1. Make your changes
2. Commit using conventional commit format:
   - `feat:` for new features (minor version bump)
   - `fix:` for bug fixes (patch version bump)
   - `chore:` for maintenance (patch version bump)
   - `docs:` for documentation (no version bump)

Example commits:
```
git commit -m "feat: add support for new messaging platform"
git commit -m "fix: resolve sharing issue with long URLs"
```

3. Push to the `main` branch
4. Release-please will automatically:
   - Create a release PR with version bump
   - Update `manifest.json` version
   - Generate changelog
   - Create GitHub release with ZIP asset

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Keywords

chrome extension, share tab, telegram share, whatsapp share, browser extension, productivity tool, social sharing, instant share, web sharing, messaging integration

## Support

If you find this extension helpful, please consider:
- ⭐ Starring this repository
- 📢 Sharing with friends
- 🐛 Reporting bugs or requesting features

---

*Made with ❤️ for the Chrome community*