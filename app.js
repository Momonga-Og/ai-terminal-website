const commandInput = document.getElementById("commandInput");
const output = document.getElementById("output");

commandInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const userInput = commandInput.value;
        output.innerHTML += `<div>> ${userInput}</div>`;
        commandInput.value = "";
        
        const response = await fetchAIResponse(userInput);
        output.innerHTML += `<div>${response}</div>`;
        output.scrollTop = output.scrollHeight;
    }
});

async function fetchAIResponse(query) {
    const response = await fetch('https://your-backend-api.com/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return data.answer || "Sorry, I couldn't understand that.";
}
