# Airbnb Open Data Visualization Dashboard

An interactive, static data visualization dashboard built using **Plotly**, showcasing insights from the **Airbnb Open Data** dataset.  
This project focuses on transforming exploratory data analysis into reusable, production-ready visualizations hosted as a static site.

---

## Project Links

- **Base GitHub Repository**  
  https://github.com/Lightning-President-9/VOIS_AICTE_Oct2025_Rohit_Wachnekar

- **Jupyter Notebook (Data Analysis & Visualization Generation)**  
  https://github.com/Lightning-President-9/VOIS_AICTE_Oct2025_Rohit_Wachnekar/blob/main/Rohit_Wachnekar_AIRBNB_HOTEL_BOOKING_ANALYSIS.ipynb

- **Dataset (Kaggle – Airbnb Open Data)**  
  https://www.kaggle.com/datasets/arianazmoudeh/airbnbopendata
  
- **Deployment Link**  
  https://airbnb-data-visualization-dashboard.onrender.com/

---

## Project Overview

This repository hosts a **static visualization dashboard** created using **Plotly Express** and **Plotly.js**.  
All charts are exported as **JSON files** and rendered client-side, making the solution:

- Fully static (no backend required)
- Fast and lightweight
- Easily deployable on Render or GitHub Pages
- Reusable across web applications and dashboards

---

## Visualizations Included

The dashboard includes the following interactive charts:

1. Distribution of Listings by Neighbourhood Group  
2. Top 10 Neighbourhoods with the Most Listings  
3. Distribution of Room Types  
4. Price Distribution (Listings under $1000)  
5. Price Distribution by Neighbourhood Group  
6. Price Distribution by Room Type  
7. Top 10 Hosts by Number of Listings  
8. Availability of Listings Throughout the Year  
9. Price vs Number of Reviews  
10. Correlation Heatmap of Numerical Features  

All charts support zooming, panning, and hover tooltips.

---

## Repository Structure

```text
airbnb-data-visualization-dashboard/
│
├── index.html          # Main static dashboard page
├── style.css           # Dashboard styling
├── script.js           # Chart loader logic
│
├── charts/             # Plotly JSON files
│   ├── neighbourhood_group_distribution.json
│   ├── top_10_neighbourhoods.json
│   ├── room_type_distribution.json
│   ├── price_distribution_under_1000.json
│   ├── price_by_neighbourhood_group.json
│   ├── price_by_room_type.json
│   ├── top_10_hosts.json
│   ├── availability_distribution.json
│   ├── price_vs_reviews.json
│   └── correlation_heatmap.json
│
└── README.md
