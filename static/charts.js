function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // console.log("data shows", data)
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleNumber = samples.filter(sampleObj => sampleObj.id === sample )
    //  5. Create a variable that holds the first sample in the array.
    var zero = sampleNumber[0]
    // console.log("This is the function", samples)
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var ids = zero.otu_ids;
    // console.log(ids)
    var labels = zero.otu_labels;
    // console.log(labels)
    var samp_values = zero.sample_values;
    // console.log(samp_values)
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var freq = result.wfreq
    console.log(" wfreq", freq)


    // console.log(freq)

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    // var yticks = (zero.sort(a,b => b.samp_values - a.samp_values))
    // console.log(yticks)

    var yticks = ids.slice(0,10).map(data => `OTU ${data}`)

    
    // 8. Create the trace for the bar chart. 
    var barData = [ { x : samp_values.slice(0,10).reverse(),
                      y : yticks,
                      type : "bar",
                      orientation: 'h'
      
  }];
    // 9. Create the layout for the bar chart. 
    var barLayout = { 
      title: "Top Ten Bacteria Cultures Found",
           
    };
    // 10. Use Plotly to plot the data with the layout. 

    Plotly.newPlot("bar",barData,barLayout);



    var bubbleData = [{
      x: ids,
      y: samp_values,
      text: labels,
      mode:"markers",
      marker: { size: samp_values, 
                color : ids,
                colorscale: [
                  ['0.0', 'rgb(165,0,38)'],
                  ['0.111111111111', 'rgb(215,48,39)'],
                  ['0.222222222222', 'rgb(244,109,67)'],
                  ['0.333333333333', 'rgb(253,174,97)'],
                  ['0.444444444444', 'rgb(254,224,144)'],
                  ['0.555555555556', 'rgb(224,243,248)'],
                  ['0.666666666667', 'rgb(171,217,233)'],
                  ['0.777777777778', 'rgb(116,173,209)'],
                  ['0.888888888889', 'rgb(69,117,180)'],
                  ['1.0', 'rgb(49,54,149)'] ]
      },
      type:"scatter"
}];

  // 2. Create the layout for the bubble chart.
  var bubbleLayout = { 
    title: "Bacteria Cultures Per Samples",
    xaxis :{title: "OTU ID"}
    
  };

  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
  // // 4. Create the trace for the gauge chart.
  var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: freq,
      title: { text: "Scrubs Per Week " },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0,10] , tickwidth : 1, tickcolor: "black" },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lightgreen" },
          { range: [8, 10], color: "green" }
        ],
    }
     
  }];
  
  // // 5. Create the layout for the gauge chart.
  var gaugeLayout = { 
    title: " Belly Button Washing Frquency"
   
  };

  // // 6. Use Plotly to plot the gauge data and layout.
  Plotly.newPlot("gauge",gaugeData, gaugeLayout);



  });
}


// // Bar and Bubble charts
// // Create the buildCharts function.
// function buildCharts(sample) {
//   // Use d3.json to load and retrieve the samples.json file 
//   d3.json("samples.json").then((data) => {
    
//     var samples = data.samples;
//     var sampleNumber = samples.filter(sampleObj => sampleObj.id === sample )
//     var zero = sampleNumber[0]
//     var ids = zero.otu_ids;
//     var labels = zero.otu_labels;
//     var samp_values = zero.sample_values.slice(0,10).reverse();
//     var barData = [ { x : samp_values,
//                       y : labels,
//                       type : "bar"
//     }]


//     // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
//     Plotly.newPlot("bar",barData); 

//     // 1. Create the trace for the bubble chart.
//     var bubbleData = [{
//         x: ids,
//         y: samp_values,
//         text: labels,
//         mode:"markers",
//         marker: { size: samp_values, 
//                   color : ids,
//                   // colorscale: otu_ids
//         },
//         type:"scatter"
//   }];

//     // 2. Create the layout for the bubble chart.
//     var bubbleLayout = { 
//       title: "Bacteria Cultures Per Samples",
//       xaxis :{title: "OTU ID"}
      
//     };

//     // 3. Use Plotly to plot the data with the layout.
//     Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
//   });
// }
