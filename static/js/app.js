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
       
        // initialise dashboard
        initPlots(names[0]);
        displayMeta(names[0]);
        gaugeChart(names[0]);
    });   
};

// Function to create charts
function initPlots(name){
    
    d3.json(url).then(function (data){

    let samples = data.samples;
    let thisSample = samples.find(sample => sample.id === name)

    // Data and Layout for bar plot
    let barData = [{
        x: thisSample.sample_values.slice(0,10).reverse(),
        y: thisSample.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
        text: thisSample.otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    let barLayout = {
        title: `Top 10 OTUs for subject ${thisSample.id}`,
        xaxis: {
            title: "Sample values"
        },
        yaxis: {
            title: "OTU ids"
        }
    };

    // Data trace and Layout for bubble chart
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
        title: `Sample ${thisSample.id}`,
        xaxis: {
            title: "OTU ids"
        },
        yaxis: {
            title: "Sample values"
        }

    }

    // Plot all charts
    Plotly.newPlot("bar", barData, barLayout);
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
});
};


// Display metadata
function displayMeta (name){

    d3.json(url).then(function (data){

    // Display metadata
    const metaPannel = d3.select("#sample-metadata");

    // Clear existing metadata
    metaPannel.html("");

    metadata = data.metadata;
    console.log("metadata", metadata)
    console.log("metadata 1", metadata[0])
    console.log("metadata 1 id", metadata[0].id)
    console.log(name)

    let thisMeta = metadata.find(meta => meta.id.toString() === name);
    console.log(thisMeta);

    Object.entries(thisMeta).forEach(([key, value]) => {
        metaPannel.append("h4").text(`${key}: ${value}`)
    }); 
 });
};


// Update charts when there is a change in the dropdown menue
function optionChanged(name) { 
    
    // Log the new id
    // console.log(name); 

    // Plot charts for that id
    initPlots(name);
    displayMeta (name);
    gaugeChart(name);
};


//Call the init function to initialise the dashboard
initDashboard();
