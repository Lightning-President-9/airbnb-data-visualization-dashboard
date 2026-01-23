async function loadChart(containerId, jsonPath) {
    try {
        const response = await fetch(jsonPath);
        const fig = await response.json();

        Plotly.newPlot(
            containerId,
            fig.data,
            fig.layout,
            { responsive: true }
        );
    } catch (error) {
        console.error(`Failed to load ${jsonPath}`, error);
    }
}

/* Load all charts */
loadChart("chart1", "./charts/neighbourhood_group_distribution.json");
loadChart("chart2", "charts/top_10_neighbourhoods.json");
loadChart("chart3", "charts/room_type_distribution.json");
loadChart("chart4", "charts/price_distribution_under_1000.json");
loadChart("chart5", "charts/price_by_neighbourhood_group.json");
loadChart("chart6", "charts/price_by_room_type.json");
loadChart("chart7", "charts/top_10_hosts.json");
loadChart("chart8", "charts/availability_distribution.json");
loadChart("chart9", "./charts/price_vs_reviews.json");
loadChart("chart10", "charts/correlation_heatmap.json");
