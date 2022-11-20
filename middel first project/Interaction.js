let currentRow = 1;
let currentCollumn = 5;
let answer = oneWord();

function oneWord() {
    //this function will generate one word from the list
    //אוסי, פונק' בנק לא גמורה
    const words = [
        "תמונה",
        "מצלמה",
        "מחברת",
        "בקבוק",
        "חולצה",
        "חברות",
        "גלידה",
        "אלבום",
        "מסיכה",
        "הצלחה",
        "משטרה",
        "אולפן",
        "התחלה",
        "הסכמה",
        "עבודה",
        "עברית",
        "עימות",
        "חפירה",
        "מסגרת",
        "תאריך",
    ];
    let rand = Math.floor(Math.random() * 20);
    return words[rand];
}

function typeLetter(idLetter) {
    if (idLetter === "enter") {
        if (currentCollumn != 0) {
            return;
        }
        checkAnswer();
        if (currentRow == 6) {
            return;
        }
        currentRow++;
        currentCollumn = 5;
        return;
    }

    if (idLetter === "delete") {
        if (currentCollumn == 5) {
            return;
        }
        currentCollumn++;
        document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML = "";
        // document.getElementById(
        //   `r${currentRow}c${currentCollumn}`
        // ).style.backgroundColor = "red";
        return;
    }

    const letterToHebrew = document.getElementById(idLetter).innerHTML;
    document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML =
        letterToHebrew;
    currentCollumn--;
}

function checkAnswer() {
    //fix the issue that count a letter twice (shows a letter when it already was counted)
    let col = 5;
    let tmpAnswer = answer;
    for (i = col; i > 0; i--) {
        let letter = document.getElementById(`r${currentRow}c${i}`).innerHTML;
        if (letter == answer[col - i]) {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#3ded97";
            document
                .getElementById(`r${currentRow}c${i}`)
                .setAttribute("isCorrect", true);
        } else if (answer.includes(letter)) {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#fda172";
        } else {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#bc544b";
        }
    }
    if (checkWin()) {
        alert(`you won! \n the word was ${answer}`);
        //here do the celebration
    }
    return;
}

function checkWin() {
    let col = 5;
    for (i = col; i > 0; i--) {
        if (
            !document.getElementById(`r${currentRow}c${i}`).getAttribute("isCorrect")
        )
            return false;
    }
    return true;
}
