var datasetSelector = document.querySelector('#datasetSelector')
document.querySelector(".pv-data").style.display = "block"
var chartField = document.querySelector("#myChart").getContext("2d")


var data = [{
    x: 65,
    y: 200
}, {
    x: 70,
    y: 250
},
{
    x: 75,
    y: 300
},
{
    x: 80,
    y: 400
},
{
    x: 85,
    y: 500
},
]; 

var options = {responsive: true, 
maintainAspectRatio: false,
scales:{
y:{
    suggestedMin:0
}
}
};

var myChart = new Chart(chartField, {
type: 'scatter',
data: {
datasets: [{
    label: 'Electric car data', 
    data: data,
    borderColor: 'coral',
    borderWidth: 1,
    pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
    pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
    pointRadius: 5,
    pointHoverRadius: 5,
    fill: 0,
    tension: 0,
    showLine: true

}],

},
options: options,

});






function positive(){
    document.querySelector(".pv-data").style.display = "block"
    document.querySelector(".nv-data").style.display = "none"
    values=[{
        x: 65,
        y: 200
    }, {
        x: 70,
        y: 250
    },
    {
        x: 75,
        y: 300
    },
    {
        x: 80,
        y: 400
    },
    {
        x: 85,
        y: 500
    },
    ]; 


    renderChart(values,"Positive Correlation ")
}

function negative(){
    document.querySelector(".nv-data").style.display = "block"
    document.querySelector(".pv-data").style.display = "none"
    value=[{
        x: 5,
        y: 200
    }, {
        x: 6,
        y: 180
    },
    {
        x: 7,
        y: 155
    },
    {
        x: 8,
        y: 100
    },
    {
        x: 8.5,
        y: 80
    },
    ]; 

    renderChart(value ,"Negative correlation ")
}

datasetSelector.addEventListener('change',()=>{
    if(datasetSelector.value=="pv-c"){
        positive()
    }else{
        negative()
    }
})


function renderChart(values,type) {
    myChart.data.datasets[0].data =values;
    myChart.data.datasets[0].label =type+"Data";
    myChart.update()
}


positive()