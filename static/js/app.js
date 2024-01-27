// Read data from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Init function fetches the data, sets up the dropdown and 
// initialises the dashboard with the first subject
function initDashboard(){
     //Fetch the JSON data and console log it
     d3.json(url).then(function (data){
        console.log("Checking data", data)
    
        // Save data to const variable
        const names = data.names;
    
        // Set up dropdown menu
        const dropdown = d3.select("#selDataset");
        names.forEach(name => {
        dropdown.append("option").property("value", name).text(name);
        });
        
        initPlots(names[0]);
    });   
};

// Function to create bar chart
function initPlots(name){
    
    d3.json(url).then(function (data){

    let samples = data.samples;
    let thisSample = samples.find(sample => sample.id === name)

    // Data and Layout for bar plot
    barData = [{
        x: thisSample.sample_values.slice(0,10).reverse(),
        y: thisSample.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
        text: thisSample.otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    barLayout = {
        title: `Top 10 OTUs for subject ${thisSample.id}`
    }

    // Data and Layout for bubble chart
    

    // Plot all charts
    Plotly.newPlot("bar", barData, barLayout);
});
};

// Update charts when there is a change in the dropdown menue
function optionChanged(name) { 
    
    // Log the new id
    console.log(name); 

    // Plot charts for that id
    initPlots(name);
};


//Call the init function to initialise the dashboard
initDashboard();
