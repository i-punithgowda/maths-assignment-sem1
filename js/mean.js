var datasetSelector = document.querySelector('#datasetSelector')
document.querySelector(".cricket").style.display = "block"
var chartField = document.querySelector("#myChart").getContext("2d")




const data = {
    labels: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5", "Match 6", "Match 7", "Match 8"],
    datasets: [{
        data: [58, 76, 40, 35, 46, 45, 20, 100],
        fill: true,
        backgroundColor: [ '#00ff96', "gold"],
        label:"Cricket data"
    }]
}

var myChart = new Chart(chartField, {
    type: "line",
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
        document.querySelector(".heights").style.display = "none";
        labels = ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5", "Match 6", "Match 7", "Match 8"]
        values = [58, 76, 40, 35, 46, 45, 20, 100]
        renderChart(labels, values,"Cricket")

    } else if (e.target.value === 'temperature') {
        document.querySelector(".cricket").style.display = "none";
        document.querySelector(".temperature").style.display = "block";
        document.querySelector(".heights").style.display = "none";
        labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8"]
        values = [20, 21, 22, 24, 25, 26, 27, 29, 37, 37]
        renderChart(labels, values,"Temperature")
    } else if (e.target.value === 'heights') {
        document.querySelector(".cricket").style.display = "none";
        document.querySelector(".temperature").style.display = "none";
        document.querySelector(".heights").style.display = "block";
        labels = ["Tree 1 ", "Tree 2", "Tree 3", "Tree 4", "Tree 5"]
        values = [98, 94, 41, 96, 11]
        renderChart(labels, values,"Heights")
    }
})

function renderChart(labels, values,type) {
        myChart.data.labels = labels
        myChart.data.datasets[0].data =values;
        myChart.data.datasets[0].label =type+" Data";
        myChart.update()
    }

