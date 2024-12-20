let DisplayValue = '';
let Operator = '';
let FirstNumber ='';
let SecondNumber = '';


function AppendNumber(number) {
    DisplayValue += number
    UpdateDisplay()
}

function SetOperator(op) {
    if (DisplayValue === '')return
    Operator = op;
    FirstNumber = DisplayValue
    DisplayValue = '';
}

function CalculateResult() {
    if (FirstNumber === '' || DisplayValue === '') return
    SecondNumber = DisplayValue
    let Result
    switch (Operator) {
        case '+':
            Result = parseFloat(FirstNumber) + parseFloat(SecondNumber)
            break;

        case '-':
            Result = parseFloat(FirstNumber) - parseFloat(SecondNumber)
            break;

        case '/':
            Result = parseFloat(FirstNumber) / parseFloat(SecondNumber)
            break;

        case '*':
            Result = parseFloat(FirstNumber) * parseFloat(SecondNumber)
            break;

        default:
            Result = 'Error';
    }
    DisplayValue = Result.toString()
    Operator = ""
    FirstNumber = ""
    SecondNumber = ""
    UpdateDisplay()
}

function UpdateDisplay() {
    document.getElementById("display").value = DisplayValue
}

function ClearDisplay() {
    DisplayValue = ""
    Operator = ""
    FirstNumber = ""
    SecondNumber = ""
    UpdateDisplay()
}