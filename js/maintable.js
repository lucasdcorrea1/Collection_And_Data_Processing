//VARIÁVEIS
var jsonReceived = sessionStorage.getItem('array-finalzao');//SEM CONVERSÃO
var jsonParseReceived = JSON.parse(jsonReceived);//JSON QUEBRADO NORMAL //STRING
var jsonReceived_OriginaL = jsonReceived;//SEM CONVERSÃO


var data_array = jsonReceived_OriginaL.split(',');//QUEBRA TODO ARRAY;
var data_array_aux = data_array[1];
var data_array_teste = data_array_aux.split(':');

//ARRAYS
var itensTabela_CIDADES = [];
var itensTabela_count_CIDADES = [];
var itensTabela_TOTAL = [];

console.log(data_array_teste[1]);




let ultimo = JSON.parse(jsonReceived).length;//TAMANHO DO ARRAY
let body = "";



//VERIFICAÇÃO CIDADE E QUANTIDADE POR CIDADE
for (var i = 0; i < ultimo; i++) {
  for (var j = 0; j < 30; j++) {
   if(jsonParseReceived[i].CIDADESP == itensTabela_CIDADES[j]){
    itensTabela_count_CIDADES[j] = (itensTabela_count_CIDADES[j] + 1);  
    j = 30;
  }else{
    itensTabela_CIDADES.push(jsonParseReceived[i].CIDADESP);
    itensTabela_count_CIDADES[j] = (itensTabela_count_CIDADES[j] + 1);  
    j = 30;
  }
}
}


// alert(itensTabela_CIDADES[0] + " |" + itensTabela_count_CIDADES[0] );
// alert(itensTabela_CIDADES[1] + " |" + itensTabela_count_CIDADES[1] );
// alert(itensTabela_CIDADES[2] + " |" + itensTabela_count_CIDADES[2] );


$("#tbodyestado").innerHTML = "";
for (var i = 0; i < ultimo; i++) {
  $(".dropdown-menu").append("<a class='dropdown-item' href='#'>" + i + "</a>");

  body +=
  "<tr>" +
  "<td>"+
  JSON.parse(jsonReceived)[i].RA +
  "</td>"+
  "<td>"+
  JSON.parse(jsonReceived)[i].ESTADO +
  "</td>"+
  "<td>"+
  JSON.parse(jsonReceived)[i].CIDADESP +
  "</td>"+
  "<td>"+
  JSON.parse(jsonReceived)[i].COMQUEMMORA2 +
  "</td>"+
  "<td class='text-primary'>"+
  JSON.parse(jsonReceived)[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2 +
  "</td>"+
  "<tr>";
  var tr = document.getElementsByTagName("td");

};




document.getElementById("tbodyestado").innerHTML = body;
var data = [];

for (var l = 0; l < 8; l++) {
  data.push(
  {
    value: itensTabela_count_CIDADES[0],
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: itensTabela_CIDADES[0]
  },
  )
}

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Pie(data);


// var data = [
//       {
//         value: itensTabela_count_CIDADES[0],
//         color:"#F7464A",
//         highlight: "#FF5A5E",
//         label: itensTabela_CIDADES[0]
//       },
//       {
//         value: 50,
//         color: "#46BFBD",
//         highlight: "#5AD3D1",
//         label: "Green"
//       },
//       {
//         value: 100,
//         color: "#FDB45C",
//         highlight: "#FFC870",
//         label: "Yellow"
//       },
//       {
//         value: 100,
//         color: "#0cc042",
//         highlight: "#FFC870",
//         label: "roxo"
//       }
//       ];

//       var ctx = document.getElementById("myChart").getContext("2d");
//       new Chart(ctx).Pie(data);
