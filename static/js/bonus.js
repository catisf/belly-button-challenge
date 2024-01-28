// Gauge chart
function gaugeChart(name){
    
    d3.json(url).then(function (data){
        let metadata = data.metadata;
        let thisSample = metadata.find(sample => sample.id.toString() === name);

        let gaugeData = [{ 
            domain: { x: [0, 10], y: [0, 10] },
            value: thisSample.wfreq,
            title: { text: "Belly Button Washing Frequency <br> Scrubs per week"},
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9]},
                steps: [
                    { range: [0, 1], color: "rgb(224,236,248)" },
                    { range: [1, 2], color: "rgb(184,212,240)" },
                    { range: [2, 3], color: "rgb(143,187,231)" },
                    { range: [3, 4], color: "rgb(103,163,222)" },
                    { range: [4, 5], color: "rgb(58,134,210)" },
                    { range: [5, 6], color: "rgb(40,110,179)" },
                    { range: [6, 7], color: "rgb(31,86,140)" },
                    { range: [7, 8], color: "rgb(22,61,100)" },
                    { range: [8, 9], color: "rgb(13,36,60)" },
                    ],
                bar: {color: "rgb(237,53,0)"}
            }
        }];

        Plotly.newPlot('gauge', gaugeData);

    });
};