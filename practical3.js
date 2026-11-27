// 1. Variables: var, let and const

function showVariables() {

    var bankName = "Secure Bank";
    let customerName = "Customer";
    const country = "India";

    let message = "Bank Name: " + bankName +
        "<br>Customer Name: " + customerName +
        "<br>Country: " + country;

    if (true) {
        var x = "var is accessible outside the block";
        let y = "let is accessible only inside the block";

        message += "<br>" + y;
    }

    message += "<br>" + x;

    document.getElementById("variableResult").innerHTML = message;
}


// 2. Operators

function showOperators() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let result = document.getElementById("operatorResult");

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {

        result.textContent = "Please enter both numbers.";
        return;
    }

    let total = a;
    total += b;

    let output =
        "Addition: " + (a + b) +
        "<br>Subtraction: " + (a - b) +
        "<br>Multiplication: " + (a * b) +
        "<br>Division: " + (b !== 0 ? a / b : "Cannot divide by zero") +
        "<br>Greater Number: " + (a > b ? a : b) +
        "<br>Both Positive: " + (a > 0 && b > 0) +
        "<br>Assignment Operator (total += b): " + total;

    result.innerHTML = output;
}


// 3. Loan Eligibility using if-else and nested if

function checkLoanEligibility() {

    let age = Number(document.getElementById("age").value);
    let income = Number(document.getElementById("income").value);
    let creditScore = Number(document.getElementById("creditScore").value);

    let result = document.getElementById("loanResult");

    if (
        document.getElementById("age").value === "" ||
        document.getElementById("income").value === "" ||
        document.getElementById("creditScore").value === ""
    ) {
        result.textContent = "Please fill all the fields.";
        return;
    }

    if (age <= 0 || income <= 0 || creditScore < 300 || creditScore > 900) {
        result.textContent = "Please enter valid details.";
    }

    else if (age < 18) {
        result.textContent = "You must be at least 18 years old.";
    }

    else {

        if (income >= 30000) {

            if (creditScore >= 700) {
                result.textContent = "Congratulations! You are eligible for a loan.";
            }

            else {
                result.textContent = "Your credit score is too low.";
            }

        }

        else {
            result.textContent = "Your monthly income is too low.";
        }

    }
}


// 4. Account Type using switch

function showAccountBenefit() {

    let account = document.getElementById("accountType").value;

    let message = "";

    switch (account) {

        case "savings":
            message = "Savings Account: Suitable for saving money.";
            break;

        case "current":
            message = "Current Account: Suitable for business transactions.";
            break;

        case "salary":
            message = "Salary Account: Used for receiving monthly salary.";
            break;

        default:
            message = "Invalid Account Type.";

    }

    document.getElementById("accountResult").textContent = message;
}


// 5. Simple Interest using for loop

function generateInterestTable() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);

    let result = document.getElementById("interestResult");

    if (
        document.getElementById("principal").value === "" ||
        document.getElementById("rate").value === "" ||
        principal <= 0 || rate < 0
    ) {
        result.textContent = "Please enter valid values.";
        return;
    }

    let output = `
        <table>
            <tr>
                <th>Year</th>
                <th>Interest</th>
                <th>Total Amount</th>
            </tr>
    `;

    for (let year = 1; year <= 5; year++) {

        let interest = (principal * rate * year) / 100;

        let amount = principal + interest;

        output += `
            <tr>
                <td>${year}</td>
                <td>₹${interest.toFixed(2)}</td>
                <td>₹${amount.toFixed(2)}</td>
            </tr>
        `;
    }

    output += "</table>";

    result.innerHTML = output;
}


// 6. while and do-while loops

function runLoopDemo() {

    let result = document.getElementById("loopResult");

    let output = "<b>While Loop:</b><br>";

    let count = 1;

    while (count <= 3) {

        output += "Transaction " + count + " completed.<br>";

        count++;
    }

    output += "<br><b>Do-While Loop:</b><br>";

    let attempt = 1;

    do {

        output += "Attempt " + attempt + " completed.<br>";

        attempt++;

    } while (attempt <= 3);

    result.innerHTML = output;
}


// 7. EMI Calculator using function

function calculateEMI(loanAmount, annualRate, months) {

    let monthlyRate = annualRate / 12 / 100;

    if (monthlyRate === 0) {
        return loanAmount / months;
    }

    let emi = loanAmount * monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return emi;
}


// Display EMI Result

function calculateAndShowEMI() {

    let loanAmount = Number(document.getElementById("loanAmount").value);

    let rate = Number(document.getElementById("emiRate").value);

    let months = Number(document.getElementById("months").value);

    let result = document.getElementById("emiResult");

    if (
        document.getElementById("loanAmount").value === "" ||
        document.getElementById("emiRate").value === "" ||
        document.getElementById("months").value === "" ||
        loanAmount <= 0 || rate < 0 || months <= 0 ||
        !Number.isInteger(months)
    ) {
        result.textContent = "Please enter valid values.";
        return;
    }

    let emi = calculateEMI(loanAmount, rate, months);

    let totalPayment = emi * months;

    result.innerHTML =
        "Monthly EMI: ₹" + emi.toFixed(2) +
        "<br>Total Payment: ₹" + totalPayment.toFixed(2) +
        "<br>Total Interest: ₹" + (totalPayment - loanAmount).toFixed(2);

}