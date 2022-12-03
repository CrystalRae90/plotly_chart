// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("plotArea",[{x: [5,10,15] , y: [10,20,30]}]);

// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// var layout ={ title : "Luncheon Survey", xaxis: {title: "Food option"}, yaxis:{title: "Number of Respondents"}}

// Plotly.newPlot("plotArea", trace, layout);

// var chart =[{ 
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y :  [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6], 
//     type :"bar"

// }]

// var layout ={
//     title :"Percentage of Drinks",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percentage"}
// }

// Plotly.newPlot("plotArea",chart, layout)


// var chart =[{ 
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values :  [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6], 
//     type : 'pie'

// }]

// var layout ={
//     title :"Percentage of Drinks",
// }

// Plotly.newPlot("plotArea",chart, layout)

// var chart =[{ 
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y :  [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6], 
//     mode: "lines+markers",
//     type : 'scatter'

// }]

// var layout ={
//     title :"Percentage of Drinks",
// }

// Plotly.newPlot("plotArea",chart, layout)


var numbers = [0,2,4,6,8];

var five = numbers.map(function(num){num +5});
console.log(five)