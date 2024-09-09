export const log = (string, color = 'green') => {
    if (typeof window !== 'undefined' && window.console) {
        // Browser environment, use CSS
        let cssColor;
        switch (color) {
            case 'green':
                cssColor = 'color: green;';
                break;
            case 'red':
                cssColor = 'color: red;';
                break;
            case 'blue':
                cssColor = 'color: blue;';
                break;
            default:
                cssColor = 'color: green;';
        }
        console.log('%c%s', cssColor, string);
    } else if (typeof process !== 'undefined' && process.stdout) {
        // Node.js or terminal environment, use escape codes
        let terminalColor;
        switch (color) {
            case 'green':
                terminalColor = '\x1b[32m'; // green
                break;
            case 'red':
                terminalColor = '\x1b[31m'; // red
                break;
            case 'blue':
                terminalColor = '\x1b[34m'; // blue
                break;
            default:
                terminalColor = '\x1b[32m'; // default to green
        }
        console.log(`${terminalColor}%s\x1b[0m`, string);
    } else {
        // Fallback for other environments, just plain console log
        console.log(string);
    }
};
