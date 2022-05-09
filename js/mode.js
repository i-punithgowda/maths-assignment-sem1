var datasetSelector = document.querySelector('#datasetSelector')
document.querySelector(".cricket").style.display = "block"
var chartField = document.querySelector("#myChart").getContext("2d")




const data = {
    labels: ["Elective 1","Elective 2","Elective 3","Elective 4","Elective 5","Elective 6"],
    datasets: [{
        data: [60,50,60,40,60,30],
        fill: true,
        backgroundColor: [ '#00ff96', "gold","#06113C","#F7E9D7","#4700D8","#A63EC5"],
        label:"Electives data"
    }]
}

var myChart = new Chart(chartField, {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
  x: {
    ticks: {
      color: "#fff"
    }
  },
  y: {
    ticks: {
      color: "#ddd"
    }
  }
}

    }
});




datasetSelector.addEventListener('change', (e) => {
    if (e.target.value === 'cricket') {
        document.querySelector(".cricket").style.display = "block";
        document.querySelector(".temperature").style.display = "none";
        labels = ["Elective 1","Elective 2","Elective 3" ,"Elective 5","Elective 6"]
        values = [60,50,60,40,60,30]
        renderChart(labels, values,"Electives")

    } else if (e.target.value === 'temperature') {
        document.querySelector(".cricket").style.display = "none";
        document.querySelector(".temperature").style.display = "block";
        labels = ["6","7", "8", "9", "10",]
        values = [70,80,70,29,50]
        renderChart(labels, values,"Shoe")
    }
   
})

function renderChart(labels, values,type) {
        myChart.data.labels = labels
        myChart.data.datasets[0].data =values;
        myChart.data.datasets[0].label =type+" Data";
        myChart.update()
    }

