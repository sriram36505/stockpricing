let stocks = [
    { name: "AAPL", price: 150, quantity: 10 },
    { name: "TSLA", price: 750, quantity: 5 }
];

// Function to update portfolio dynamically
function updatePortfolio() {
    const table = document.getElementById("portfolio-table");
    table.innerHTML = ""; 

    stocks.forEach((stock, index) => {
        let row = `
            <tr>
                <td>${stock.name}</td>
                <td>$${stock.price}</td>
                <td>${stock.quantity}</td>
                <td>$${stock.price * stock.quantity}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Function to add a new stock
function addStock() {
    let name = prompt("Enter stock symbol (e.g., AAPL, TSLA):");
    let price = parseFloat(prompt("Enter stock price:"));
    let quantity = parseInt(prompt("Enter quantity:"));

    if (name && !isNaN(price) && !isNaN(quantity)) {
        stocks.push({ name, price, quantity });
        updatePortfolio();
    }
}

// Load portfolio when page loads
document.addEventListener("DOMContentLoaded", updatePortfolio);
