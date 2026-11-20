# SimpleCalculator

A lightweight, web‑based **Simple Calculator** built with **HTML**, **CSS**, and **JavaScript**. It provides the essential arithmetic operations, clear/delete functionality, and full keyboard support while being fully responsive for desktop and mobile browsers.

---

## Tech Stack
- **HTML5** – Structure of the calculator UI.
- **CSS3** – Styling and responsive layout.
- **JavaScript (ES6)** – Core calculation logic (`Calculator` class) and UI wiring.

---

## Features
- **Basic arithmetic** – addition, subtraction, multiplication, division.
- **Clear (C) & Delete (←)** – Reset the calculator or remove the last digit.
- **Keyboard shortcuts** – Use the keyboard for every button (numbers, operators, `Enter`/`=` for compute, `Esc`/`C` for clear, `Backspace`/`←` for delete).
- **Responsive design** – Grid layout adapts to different screen sizes; buttons resize gracefully on mobile devices.
- **Error handling** – Division by zero displays an `Error` message.
- **Modular code** – `Calculator` class is isolated from the UI, making it easy to test or reuse.

---

## Installation & Usage
1. **Clone the repository**
   ```bash
   git clone https://github.com/your‑username/simplecalculator.git
   cd simplecalculator
   ```
2. **Open the application**
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari, etc.). No build steps or server required.
   ```bash
   # On macOS/Linux you can use:
   open index.html
   # On Windows:
   start index.html
   ```
3. **Start calculating!**
   - Click the on‑screen buttons or use the keyboard shortcuts listed below.

---

## Keyboard Shortcuts & Button Layout
| Keyboard | Button (data‑key) | Action |
|----------|-------------------|--------|
| `0`‑`9`  | `0`‑`9`           | Append digit |
| `.`      | `.`               | Append decimal point |
| `+` `-` `*` `/` | `+` `-` `*` `/` | Choose operation |
| `Enter` or `=` | `=` | Compute result |
| `c` / `C` / `Escape` | `C` | Clear all |
| `Backspace` or `←` | `←` | Delete last character |

The calculator UI mirrors this layout:

```
C   ←   /   *
7   8   9   -
4   5   6   +
1   2   3   =
0 (span 2) .
```

---

## Screenshot
> **[Placeholder for screenshot]**
> Replace this line with an actual image of the calculator, e.g. `![Calculator screenshot](screenshot.png)`.

---

## Responsive Behavior
- The calculator uses CSS Grid; on narrow viewports the button grid automatically scales down while maintaining a comfortable tap size.
- The display area expands to fill the width, and font sizes adjust via relative units (`rem`) for readability on both desktop and mobile devices.

---

## Contributing (Optional)
Contributions are welcome! If you’d like to improve the calculator:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Ensure the existing functionality still works (open `index.html` and test manually).
5. Submit a pull request with a clear description of the changes.

---

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.
