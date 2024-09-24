const eChart = {
  series: [
    {
      name: "Users",
      data: [30, 200, 100, 220],
      color: "#F7F3FF",  
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"], 
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "<30",
        "35 - 37",
        "38 - 40",
        "41 - 42", 
      ],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            "#4A5157",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [
            "#4A5157",
          ],
        },
        formatter: function (value) {
          return value + "K";  
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    annotations: {
      xaxis: [
        {
          x: "<30",
          y: 0,
          y2: 450, 
          borderColor: "#4A5157",
          borderDashArray: 4,
        },
        {
          x: "35 - 37",
          y: 0,
          y2: 200,
          borderColor: "#4A5157",
          borderDashArray: 4,
        },
        {
          x: "38 - 40",
          y: 0,
          y2: 100,
          borderColor: "#4A5157",
          borderDashArray: 4,
        },
        {
          x: "41 - 42",
          y: 0,
          y2: 220,
          borderColor: "#4A5157",
          borderDashArray: 4,
        },
      ],
    },
  },
};

export default eChart;
