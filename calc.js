import { quotes } from 'data.js'

function setup() {
    var userInput = document.getElementById('userInput');
    var resultLabel = document.getElementById('resultLabel');
    var quoteLabel = document.getElementById('quoteLabel');

    userInput.addEventListener('input', function () {
        var daysPassed = userInput.valueAsNumber;
        if (isNaN(daysPassed)) {
            resultLabel.innerHTML = '...';
        }
        else {
            resultLabel.innerHTML = returnString(daysPassed);
        }
    });

    quoteLabel.innerHTML = `<blockquote cite="${quotes[0].speaker}">${quotes[0].quote}`

    function returnString(x) {
        var MESSAGE;
        var dayIncrementCount = 0;
        if ((x % 8) == 0) {
            MESSAGE = `A Necromancer's Moon is already occurring on day <span>${x}</span>.`;
        }
        else {
            while ((x % 8) != 0) {
                dayIncrementCount += 1;
                x += 1;
            }
            MESSAGE = `A Necromancer's Moon will occur on day <span>${x}</span> in <span>${dayIncrementCount}</span> days.`;
        }
        return MESSAGE;
    }
}

document.addEventListener('DOMContentLoaded', setup);