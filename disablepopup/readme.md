# Disable @ Tag in Guild Popups

A Vencord plugin that prevents the @ tag popup from appearing when clicking on usernames in the member list.

**Author:** Kermy.lol

## Features

- Disables the @ tag popup when clicking on usernames in the member list
- Hold a modifier key (Shift, Ctrl, Alt, or Cmd) to temporarily enable the popup
- Toggle the feature on/off in the plugin settings

## Installation

1. Make sure you have [Vencord](https://github.com/Vendicated/Vencord) installed
2. Copy the `disablepopup` folder to your Vencord plugins directory:
   - Windows: `%appdata%\Vencord\settings\src\userplugins\`
   - Linux: `~/.config/Vencord/settings/src/userplugins/`
   - macOS: `~/Library/Application Support/Vencord/settings/src/userplugins/`
3. Restart Discord or reload Vencord
4. Enable the plugin in Vencord settings under "Plugins" > "DisableTagInPopups"

## Usage

1. After enabling the plugin, clicking on usernames in the member list will no longer show the @ tag popup
2. To temporarily use the @ tag functionality, hold any of these keys while clicking:
   - Shift
   - Ctrl (Cmd on Mac)
   - Alt
   - Meta (Windows/Command key)

## Configuration

You can toggle the plugin on/off in the Vencord settings under "Plugins" > "DisableTagInPopups".

## Building from Source

If you want to modify the plugin:

1. Clone the Vencord repository
2. Copy the `disablepopup` folder to `src/userplugins/`
3. Build Vencord using the provided build tools

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Kermy.lol** - [Website](https://kermy.lol)

## Contributing

Feel free to submit issues and pull requests for any improvements or bug fixes.