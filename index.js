const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
const historyList = document.getElementById("history-list");
const history = [];

roll.addEventListener("click", () => {
    dice.classList.add("roll-dice");
    setTimeout(() => {
        dice.classList.remove("roll-dice");
        const number = Math.floor(Math.random() * 6) + 1;
        getDiceFace(number);
        history.push(number);
        updateHistory();
    }, 1000);
})

function updateHistory() {
    historyList.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        const list = document.createElement("li");
        list.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(history[i])}</span>`;
        historyList.appendChild(list);
    }
}

function getDiceFace(number) {
    switch (number) {
        case 1:
            return dice.innerHTML = "&#9856;";
        case 2:
            return dice.innerHTML = "&#9857;";
        case 3:
            return dice.innerHTML = "&#9858;";
        case 4:
            return dice.innerHTML = "&#9859;";
        case 5:
            return dice.innerHTML = "&#9860;";
        case 6:
            return dice.innerHTML = "&#9861;";
        default:
            return "";
    }
}