var teste = sessionStorage.getItem('array-finalzao')
        console.log(JSON.parse(teste));
        
        var ultimo = JSON.parse(teste).length
        let body = "";
        $("#tbodyestado").innerHTML = "";
        for (var i = 0; i < ultimo; i++) {

          body +=
            "<tr>" +
                "<td  class='text-susses'>"+
                    JSON.parse(teste)[i].RA +
                  "</td>"+
                  "<td>"+
                      JSON.parse(teste)[i].ESTADO +
                  "</td>"+
                  "<td>"+
                      JSON.parse(teste)[i].CIDADESP +
                  "</td>"+
                  "<td>"+
                      JSON.parse(teste)[i].COMQUEMMORA2 +
                  "</td>"+
                  "<td class='text-primary'>"+
                      JSON.parse(teste)[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2 +
                  "</td>"+
          "<tr>";
              var tr = document.getElementsByTagName("td");
              
        };
        document.getElementById("tbodyestado").innerHTML = body;
      // http://www.chartjs.org/docs/#doughnut-pie-chart-introduction

var data = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 100,
        color: "#0cc042",
        highlight: "#FFC870",
        label: "roxo"
    }
];

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Pie(data);

var data2 = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 100,
        color: "#0cc042",
        highlight: "#FFC870",
        label: "roxo"
    }
];

var ctx2 = document.getElementById("myChart2").getContext("2d");
new Chart(ctx2).Pie(data2);