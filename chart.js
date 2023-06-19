(function() {
    const ctx = document.getElementById('lawsuits');

    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [2017, 2018, 2019, 2020, 2021, 2022],
        datasets: [{
            label: 'ADA Title III Website Accessibility Lawsuits in Federal Court',
            data: [814, 2258, 2256, 2523, 2895, 3255],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        aspectRatio: 1.2,
        plugins: {
            title: {
                display: true,
                text: '(Source: Seyfarth Shaw LLP)'
            }
        }
    }
    });
})();
