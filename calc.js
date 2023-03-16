function setup() {
    var userInput = document.getElementById('userInput');
    var resultLabel = document.getElementById('resultLabel');

    userInput.addEventListener('input', function () {
        var daysPassed = userInput.valueAsNumber;
        if (isNaN(daysPassed)) {
            resultLabel.innerHTML = '...';
        }
        else if (daysPassed <= 9999) {
            resultLabel.innerHTML = returnString(daysPassed);
        }
        else {
            resultLabel.innerHTML = 'Unlike your acrobatics skill, this script has an upper limit of <span class="highlight">9999</span> to prevent crashes.'
        }
    });

    function returnString(x) {
        var MESSAGE;
        var dayIncrementCount = 0;
        if ((x % 8) == 0) {
            MESSAGE = `The Shade of the Revenant is already occurring on day <span class="highlight">${x}</span>.`;
        }
        else {
            while ((x % 8) != 0) {
                dayIncrementCount += 1;
                x += 1;
            }
            MESSAGE = `The next Shade of the Revenant will occur on day <span class="highlight">${x}</span> in <span class="highlight">${dayIncrementCount}</span> days.`;
        }
        return MESSAGE;
    }
}

document.addEventListener('DOMContentLoaded', setup);