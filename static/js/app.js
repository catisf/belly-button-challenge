// Read data from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let hasStarted = false

// Initialise the dashboard with the first subject
function initDashboard(){
     //Fetch the JSON data and console log it
     d3.json(url).then(function (data){
        console.log("Checking data", data)
    
        // Save the names to a variable
        const names = data.names;
    
        // Set up dropdown menu
        const dropdown = d3.select("#selDataset");
        names.forEach(name => {
        dropdown.append("option").property("value", name).text(name);
        });
       
        // initialise dashboard with first subject
        plotCharts(names[0]);
        displayMeta(names[0]);
        gaugeChart(names[0]);
    });   
};


// Create bar and bubble charts
function plotCharts(name){
    
    // Fetch the data
    d3.json(url).then(function (data){
    
    // Save samples to a variable
    let samples = data.samples;

    // Look for the data for a specific id
    let thisSample = samples.find(sample => sample.id === name)

    // Define data and layout for bar plot
    let barData = [];
    
    barData = [{
        x: thisSample.sample_values.slice(0,10).reverse(),
        y: thisSample.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
        text: thisSample.otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    let barLayout = {
        title: {text: `Top 10 OTUs for subject ${thisSample.id}`, 
                font: {size:20}},
        xaxis: {title: "Sample values",
                titlefont: {size: 18}},
        yaxis: {title: "OTU ids",
                titlefont: {size:18}},
        width: 500,
        height: 500,
        margin: {l: 100},
    };

    // Define data and layout for bubble chart
    let bubbleData = [{
        x: thisSample.otu_ids,
        y: thisSample.sample_values,
        text: thisSample.otu_labels,
        mode: 'markers',
        marker: {
          size: thisSample.sample_values,
          color: thisSample.otu_ids,
          colorscale: "Jet"
        }
      }];
    
    let bubbleLayout = {
        title: {text: "Bacteria per sample",
                font: {size: 20},
                y: 0.85},
        xaxis: {title: "OTU ids",
                titlefont: {size: 18}},
        yaxis: {title: "Sample values",
                titlefont: {size: 18}},
    };

    // Plot both charts
    Plotly.newPlot("bar", barData, barLayout);
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
});
};


// Display metadata
function displayMeta (name){

    // Fetch the data
    d3.json(url).then(function (data){

    // Set the pannel for metadata
    const metaPannel = d3.select("#sample-metadata");

    // Clear existing metadata
    metaPannel.html("");

    // Save metadata to a variable
    metadata = data.metadata;

    // Look for the data for a specific id
    let thisMeta = metadata.find(meta => meta.id.toString() === name);
    //console.log(thisMeta); // run to check it's been done correctly

    // Display metadata in the pannel
    Object.entries(thisMeta).forEach(([key, value]) => {
        metaPannel.append("h4").text(`${key}: ${value}`)
    }); 
 });
};


// Update charts when there is a change in the dropdown menu
function optionChanged(name) { 
    
    // Log the new id
    // console.log(name); 

    // Plot charts and display metadata for that id
    plotCharts(name);
    displayMeta (name);
    gaugeChart(name);
};


//Call the function to initialise the dashboard
initDashboard();