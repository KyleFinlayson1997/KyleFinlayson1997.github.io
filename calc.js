function setup() {
    var userInput = document.getElementById('userInput');
    var resultLabel = document.getElementById('resultLabel');

    userInput.addEventListener('input', function () {
        var daysPassed = userInput.valueAsNumber;
        if (isNaN(daysPassed)) {
            resultLabel.innerHTML = '...';
        }
        else {
            resultLabel.innerHTML = returnString(daysPassed);
        }
    });

    function returnString(x) {
        var MESSAGE;
        var dayIncrementCount = 0;
        if ((x % 8) == 0) {
            MESSAGE = `A Necromancer's Moon is already occurring on day <span class="highlight">${x}</span>.`;
        }
        else {
            while ((x % 8) != 0) {
                dayIncrementCount += 1;
                x += 1;
            }
            MESSAGE = `A Necromancer's Moon will occur on day <span class="highlight">${x}</span> in <span class="highlight">${dayIncrementCount}</span> days.`;
        }
        return MESSAGE;
    }
}

document.addEventListener('DOMContentLoaded', setup);