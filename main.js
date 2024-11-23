function binarie() {
    let test = document.getElementById("from").value; 
    let mod;
    let binarie = "";
    
    document.getElementById("language-select").placeholder = "Binary";

    if (isNaN(test) || test === null || test === String || test.trim() === "" || test < 0) {
        document.getElementById("to").placeholder = "Please enter a valid positive number.";
    }else {
        test = parseInt(test); 
        while (test > 0) {
            mod = test % 2; 
            test = Math.floor(test / 2);
            binarie = mod + binarie; 
        }
        document.getElementById("to").placeholder =  `Binary representation: ${binarie} `
    }
}

function decimal() {
    let test = document.getElementById("from").value; 
    let mod;
    let decimal = 0;
    let Exp = 0;

    document.getElementById("language-select").placeholder = "Decimal";

    if (isNaN(test) || test === null || test === String || test === undefined  || test.trim() === "" || test < 0 || !/^[01]+$/.test(test)) {
        document.getElementById("to").placeholder = "Please enter a valid positive binary number."
    } else {
        test = parseInt(test); 
        while (test > 0) {
            mod = test % 10; 
            test = Math.floor(test / 10); 
            decimal += mod * 2 ** Exp;
            Exp++;
        }
        document.getElementById("to").placeholder =`Decimal representation: ${decimal} `
    }
}
    
function Translation() {
    let option = document.getElementById("option").value;
if (option == "Binary") {
    decimal();
} else if (option == "Decimal") {
    binarie();
}
}