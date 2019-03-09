
var teste = sessionStorage.getItem('array-finalzao')
console.log(JSON.parse(teste));

var ultimo = JSON.parse(teste).length
let body = "";
$("#tbodyestado").innerHTML = "";
var array = JSON.parse(teste);
for (var i = 0; i < ultimo; i++) {
    if (i == 0) {
        body +=
            "<th>" +
            "Id" +
            "</th>" +
            "<th>" +
            "ESTADO" +
            "</th>" +
            "<th>" +
            "CIDADE" +
            "</th>" +
            "<th>" +
            "COM QUEM MORA" +
            "</th>" +
            "<th>" +
            "AQUEESSECONHECIMENTOSERELACIONA" +
            "</th>" +
            "<th>" +
            "DATADENASCIMENTO" +
            "</th>";

    }

    body +=
        "<tr>" +
        "<td class='text-primary'>" +
        array[i].RA +
        "</td>" +
        "<td id='tableEstado'>" +
        array[i].ESTADO +
        "</td>" +
        "<td id='tableEstado'>" +
        array[i].CIDADESP +
        "</td>" +
        "<td id='tableEstado'>" +
        array[i].COMQUEMMORA2 +
        "</td>" +
        "<td>" +
        array[i].AQUEESSECONHECIMENTOSERELACIONA +
        "</td>" +
        "<td>"+
      array[i].DATADENASCIMENTO +
      "</td>";
    //   "<td>"+
    //   array[i].EMQUAISESCOLASESTUDOU2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].ESTADOCÍVIL2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].PERÍODO +
    //   "</td>"+
    //   "<td>"+
    //   array[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].QUALARENDAFAMILIAR2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].QUALARENDAFAMILIAR2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].QUANTOTEMPOPORSEMANAVOCÊDEDICAESTUDANDOOUAPRIMORANDOSUASHABILIDADES +
    //   "</td>"+
    //   "<td>"+
    //   array[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2 +
    //   "</td>"+
    //   "<td>"+
    //   array[i].SEXOGÊNERO +
    //   "</td>"+
    //   "<td>"+
    //   array[i].SUARESIDÊNCIAÉ +
    //   "</td>"+
    //   "<td>"+
    //   array[i].TEMACESSOAATENDIMENTODESAÚDE +
    //   "</td>"+
    //   "<td>"+
    //   array[i].TEMFILHOS +
    //   "</td>"+
    //   "<td>"+
    //   array[i].VOCÊJÁFEZOUTROCURSO +
    //   "</td>"+
    //   "<td>"+
    //   array[i].TEMFILHOS +
    //   "</td>"+
    //   "<td >"+
    //   array[i].VOCÊTRABALHAQUALOREGIMEDETRABALHO +
    //   "</td>"+
    //   "<td >"+
    //   array[i].ÉPORTADORDENECESSIDADESESPECIAIS +
    //   "</td>"+
    "<tr>";
    var tr = document.getElementsByTagName("td");

};
document.getElementById("theadestado").innerHTML = body;
// http://www.chartjs.org/docs/#doughnut-pie-chart-introduction

var data = [
    {
        value: 30,
        color: "#F7464A",
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
        color: "#F7464A",
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