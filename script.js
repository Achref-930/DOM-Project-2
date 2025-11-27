document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    const colorCode = document.getElementById('color-code');
    const toast = document.getElementById('toast');

    // Function to generate a random hexadecimal color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to determine if text should be black or white based on background luminance
    function getContrastColor(hexColor) {
        // Convert hex to RGB
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        
        // Calculate luminance
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        
        return (yiq >= 128) ? '#000000' : '#ffffff';
    }

    function updateColor() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;
        
        // Update text color for better contrast
        const textColor = getContrastColor(randomColor);
        colorBox.style.color = textColor;
    }

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    function copyToClipboard() {
        const textToCopy = colorCode.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast();
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    // Event listeners
    changeColorBtn.addEventListener('click', updateColor);
    colorBox.addEventListener('click', copyToClipboard);

    // Initialize with a random color
    updateColor();
});
