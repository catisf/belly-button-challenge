// Gauge chart
function gaugeChart(name){
    
    d3.json(url).then(function (data){
        let metadata = data.metadata;
        let thisSample = metadata.find(sample => sample.id.toString() === name);

        let data = [{ 
            domain: { x: [0, 10], y: [0, 10] },
            value: thisSample.wfreq,
            title: { text: "Washing frequency" },
            type: "indicator",
            mode: "gauge+number"
        }];


        Plotly.newPlot('gauge', data);

    });

};