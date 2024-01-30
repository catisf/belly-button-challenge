# Belly-button-challenge
### Challenge 14 of UoB Data Analytics bootcamp - Interactive data visualisation

## Content:
1. [Overview](https://github.com/catisf/belly-button-challenge?tab=readme-ov-file#1-overview)
2. [Deployment](https://github.com/catisf/belly-button-challenge?tab=readme-ov-file#2-deployment)
3. [Repository structure](https://github.com/catisf/belly-button-challenge?tab=readme-ov-file#3-repository-structure)
4. [Set up and execution](https://github.com/catisf/belly-button-challenge?tab=readme-ov-file#4-set-up-and-execution)
5. [Data source](https://github.com/catisf/belly-button-challenge?tab=readme-ov-file#5-data-source)

## 1. Overview
The main aim of this assignment is to build an interactive dashboard, to explore the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dashboard includes:
- A horizontal bar chart with a dropdown menu to display the top 10 OTUs (operational taxonomic units - or microbial species) found in the selected individual
- A bubble chart that displays each sample
- The sample metadata (the individual's demographic information), as key-value pairs
- A gauge chart (advanced challenge) plotting the weekly washing frequency of the selected individual.

## 2. Deployment
### The dashboard is deployed to GitHub Pages. You can find it [here](https://catisf.github.io/belly-button-challenge/).

<p align="center">
  <img src = "https://github.com/catisf/belly-button-challenge/blob/main/dashboard.png" height = "50%" width = "50%">
</p>
<h6 align="center">Fig. 1 - Screenshot of the interactive dashboard</h6>

## 3. Repository structure
This repository contains:
- [`samples.json`](https://github.com/catisf/belly-button-challenge/blob/main/samples.json) stores all the data. Note however that this file is just for reference, and it is not called in any of the scripts. The data used to build the dashboard is fetched using the [D3 library](https://d3js.org/)
- [`index.html`](https://github.com/catisf/belly-button-challenge/blob/main/index.html) has the html code to display the dashboard
- [`static/js`](https://github.com/catisf/belly-button-challenge/tree/main/static/js) contains the 'app.js' and 'bonus.js' files. ['app.js'](https://github.com/catisf/belly-button-challenge/blob/main/static/js/app.js) file initiates the dashboard, sets up the dropdown menu and plots (and updates) all charts, as well as displaying the metadata. ['bonus.js'](https://github.com/catisf/belly-button-challenge/blob/main/static/js/bonus.js) contains the function used to plot the gauge chart. 

## 4. Set up and execution
1. Clone the repository to your local computer: in your Terminal type `git clone https://github.com/catisf/belly-button-challenge.git`
2. Open 'index.html' in your favourite web browser
3. Select different individuals from the dropdown menu to see the different samples

## 5. Data source
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
