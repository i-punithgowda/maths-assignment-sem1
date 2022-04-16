var datasetSelector = document.querySelector('#datasetSelector')
document.querySelector(".cricket").style.display = "block"
var chartField = document.querySelector("#myChart").getContext("2d")




const data = {
    labels: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8","Student 9","Student 10","Student 11"],
    datasets: [{
        data: [17, 22, 25, 29, 35, 36, 38, 40, 42, 45 , 100],
        fill: true,
        backgroundColor: [ '#00ff96', "gold"],
        label:"Cricket data"
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
        labels = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5", "Student 6", "Student 7", "Student 8","Student 9","Student 10","Student 11"]
        values = [17, 22, 25, 29, 35, 36, 38, 40, 42, 45 , 100]
        renderChart(labels, values,"Marks")

    } else if (e.target.value === 'temperature') {
        document.querySelector(".cricket").style.display = "none";
        document.querySelector(".temperature").style.display = "block";
        labels = ["House 1", "House 2", "House 3", "House 4", "House 5"]
        values = [15900,25000,27000,29000,30300]
        renderChart(labels, values,"Cost")
    }
   
})

function renderChart(labels, values,type) {
        myChart.data.labels = labels
        myChart.data.datasets[0].data =values;
        myChart.data.datasets[0].label =type+" Data";
        myChart.update()
    }

