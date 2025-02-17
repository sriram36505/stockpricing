const ctx = document.getElementById("stockChart").getContext("2d");

const stockChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Stock Value",
                data: [100, 120, 130, 110, 150],
                borderColor: "#00E676",
                backgroundColor: "rgba(0, 230, 118, 0.3)",
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            duration: 2000,
            easing: "easeInOutQuart"
        },
        scales: {
            y: {
                grid: { color: "#444" }
            },
            x: {
                grid: { color: "#444" }
            }
        }
    }
});

