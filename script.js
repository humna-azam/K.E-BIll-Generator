function calculateBill() {
    let name = document.getElementById('custName').value;
    let units = Number(document.getElementById('units').value);
    let output = document.getElementById('billResult');

    if (name === "" || units <= 0) {
        alert("Please enter valid name and units!");
        return;
    }

    let rate = 0;
    let amount = 0;

    // Slab Logic
    if (units <= 100) {
        rate = 15; // Rs. 15 per unit
    } else if (units <= 300) {
        rate = 22; // Rs. 22 per unit
    } else {
        rate = 35; // Rs. 35 per unit
    }

    let energyCharges = units * rate;
    let tax = energyCharges * 0.15; // 15% Tax (GST etc)
    let totalBill = energyCharges + tax;

    output.style.display = "block";
    output.innerHTML = `
        <h3 style="margin-top:0;">K-ELECTRIC INVOICE</h3>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Units Consumed:</strong> ${units}</p>
        <p><strong>Rate applied:</strong> Rs. ${rate}</p>
        <hr>
        <p>Charges: Rs. ${energyCharges.toFixed(2)}</p>
        <p>Tax (15%): Rs. ${tax.toFixed(2)}</p>
        <h3 style="color:#ed1c24;">Net Amount: Rs. ${totalBill.toFixed(2)}</h3>
    `;
}