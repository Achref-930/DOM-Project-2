# 🎨 Color Palette Generator

A modern, interactive web application that generates random colors and provides their hexadecimal codes. Designed with a focus on user experience and visual appeal.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Instant Color Generation**: Generate a new random color with a single click.
- **Smart Contrast**: Automatically adjusts text color (black/white) based on the background brightness for optimal readability.
- **One-Click Copy**: Click anywhere on the color box to instantly copy the HEX code to your clipboard.
- **Visual Feedback**: Smooth animations and a toast notification confirm when a color code is copied.
- **Modern UI**: Features a glassmorphism design, responsive layout, and polished interactions.

## 🚀 Demo

Simply open `index.html` in your web browser to start using the application. No installation or server required!

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Flexbox, CSS Variables, Transitions, and Glassmorphism effects.
- **JavaScript (ES6+)**: DOM manipulation, Event handling, and Clipboard API integration.

## 📂 Project Structure

```
DOM Project 2/
├── index.html      # Main HTML structure
├── styles.css      # Styling and visual effects
├── script.js       # Logic for color generation and interaction
└── README.md       # Project documentation
```

## 💡 How It Works

1.  **Generation**: The `getRandomColor()` function creates a random 6-digit hexadecimal string.
2.  **Contrast Calculation**: The `getContrastColor()` function calculates the luminance of the generated color and determines whether black or white text provides better contrast.
3.  **Interaction**: Event listeners handle button clicks for generation and box clicks for copying to the clipboard.

## 🤝 Contributing


1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ by [Achref-930]*
