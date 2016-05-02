$(document).ready(function() {
    main();
});

function main() {
    var strVal;
    var modFizz;
    var modBuzz;
    var strFizz = "Fizz";
    var strBuzz = "Buzz";
    
    
    for (var i = 1; i <= 100; i++) {
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
