async function validateFlag() {
    try {
        const response = await fetch('../flags/flag.txt');
        if (!response.ok) {
            throw new Error('Failed to fetch the flag file');
        }
        const flag = await response.text();
        const userInput = document.getElementById('userInput').value.trim();
        const messageElement = document.getElementById('message');

        if (userInput === flag.trim()) {
            messageElement.innerText = 
                "Well done. You have been selected for the Icarus case. Please head to this website [coming soon]";
            messageElement.className = "message success";
        } else {
            messageElement.innerText = "Incorrect information. Try again.";
            messageElement.className = "message error";
        }
    } catch (error) {
        console.error(error);
        const messageElement = document.getElementById('message');
        messageElement.innerText = "An error occurred while validating the information.";
        messageElement.className = "message error";
    }
}
