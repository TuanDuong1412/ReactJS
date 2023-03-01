function calculate() {

    let amount = prompt("Enter amount");

    let rate = prompt("Enter interest rate (%)");

    let months = prompt("Enter months to pay");
	
	// Calculating interest per month
	const interest = (amount * (rate * 0.01)) / months;
	
	// Calculating total payment
	const total = ((amount / months) + interest).toFixed(2);

	alert("EMI: " + total);
}