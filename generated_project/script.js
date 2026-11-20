// Calculator core logic implementation
// This file defines a Calculator class that handles the computation logic for a simple calculator UI.
// The class does not directly bind to any UI elements except a provided display element.
// It is intended to be instantiated elsewhere and its methods wired to button events.

class Calculator {
    /**
     * Creates a new Calculator instance.
     * @param {HTMLElement} displayElement - The element where the calculator display will be shown.
     */
    constructor(displayElement) {
        if (!(displayElement instanceof HTMLElement)) {
            throw new Error('displayElement must be an instance of HTMLElement');
        }
        this.displayElement = displayElement;
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
        this.updateDisplay();
    }

    /** Reset the calculator to its initial state. */
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
        this.updateDisplay();
    }

    /** Delete the last character of the current operand. */
    delete() {
        if (this.currentOperand) {
            this.currentOperand = this.currentOperand.slice(0, -1);
            this.updateDisplay();
        }
    }

    /**
     * Append a digit or decimal point to the current operand.
     * @param {string} number - The digit ("0"-"9") or decimal point (".") to append.
     */
    appendNumber(number) {
        // Prevent multiple decimal points
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Avoid leading zeros like "00" unless after a decimal point
        if (number === '0' && this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay();
    }

    /**
     * Choose an operation (+, -, *, /).
     * @param {string} op - The operation symbol.
     */
    chooseOperation(op) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = op;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    /** Perform the pending computation. */
    compute() {
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current) || this.operation === null) {
            return;
        }
        let computation;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.currentOperand = 'Error';
                    this.operation = null;
                    this.previousOperand = '';
                    this.updateDisplay();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        // Trim unnecessary decimal zeros
        this.currentOperand = Number.isInteger(computation) ? computation.toString() : computation.toString();
        this.operation = null;
        this.previousOperand = '';
        this.updateDisplay();
    }

    /** Update the calculator's display element based on the current state. */
    updateDisplay() {
        if (this.currentOperand !== '') {
            this.displayElement.textContent = this.currentOperand;
        } else if (this.previousOperand !== '' && this.operation !== null) {
            this.displayElement.textContent = `${this.previousOperand} ${this.operation}`;
        } else {
            this.displayElement.textContent = '0';
        }
    }
}

// Expose globally for non‑module usage.
if (typeof window !== 'undefined') {
    window.Calculator = Calculator;
}



/* -------------------------------------------------------------------------- */
/* UI Wiring and Keyboard Support                                            */
/* -------------------------------------------------------------------------- */

// Instantiate the calculator with the display element.
const calculator = new Calculator(document.getElementById('display'));

// Helper function to handle a key/action.
function handleInput(key) {
    if (/[0-9.]/.test(key)) {
        calculator.appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        calculator.chooseOperation(key);
    } else if (key === '=' || key === 'Enter') {
        calculator.compute();
    } else if (key === 'C' || key === 'c' || key === 'Escape') {
        calculator.clear();
    } else if (key === '←' || key === 'Backspace') {
        calculator.delete();
    }
    // Ensure display is up‑to‑date (methods already call updateDisplay, but we call again for safety).
    calculator.updateDisplay();
}

// Wire button clicks.
const keys = document.querySelectorAll('.key');
keys.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.dataset.key;
        if (!key) return; // ignore if no data-key attribute
        handleInput(key);
    });
});

// Keyboard handling.
window.addEventListener('keydown', e => {
    const key = e.key;
    // Map keyboard keys to calculator actions.
    const validKeys = [
        '0','1','2','3','4','5','6','7','8','9','.',
        '+','-','*','/',
        '=',
        'Enter',
        'c','C','Escape',
        'Backspace','←'
    ];
    if (!validKeys.includes(key)) return;
    e.preventDefault(); // Prevent default browser actions for these keys.
    handleInput(key);
});
