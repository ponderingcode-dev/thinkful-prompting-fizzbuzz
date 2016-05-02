$(document).ready(function() {
    var userVal = promptForEndingValue();
    main(userVal);
});

function main(endVal) {
    while (0 >= endVal || isNaN(endVal)) {
        endVal = promptForEndingValue(true);
    }
    
    var strVal;
    var modFizz;
    var modBuzz;
    var strFizz = "Fizz";
    var strBuzz = "Buzz";
    
    for (i=1; i <= endVal; i++) {
        strVal = "";
        modFizz = (0 == i % 3 ? true : false);
        modBuzz = (0 == i % 5 ? true : false);
        
        if (!modFizz && !modBuzz) {
            strVal += i;
        }
        else {
            if (modFizz) {
                strVal += strFizz;
            }
            if (modBuzz) {
                strVal += strBuzz;
            }
        }
        $('#output').append($("<li>").text(i + ".)" + spaceMaker(i) + strVal));
        $('#output').append($("<li>").text("\u00A0"));
    }
}

function spaceMaker(i) {
    var whitespace = "\u00A0";
    if (99 < i) {
        return whitespace;
    } else if (9 < i) {
        return whitespace+whitespace+whitespace;
    } else {
        return whitespace+whitespace+whitespace+whitespace+whitespace;
    }
}

function promptForEndingValue(doScoldUser=false) {
    var strInstructions = "Enter a numeric value greater than zero."
    var strScold = "YOU FAILED TO FOLLOW INSTRUCTIONS. PLEASE TRY AGAIN."
    var strMessage = doScoldUser ? strScold + " " + strInstructions : strInstructions;
    return parseInt(prompt(strMessage));
}