//VARIÁVEIS
var jsonReceived = sessionStorage.getItem('array-finalzao');//SEM CONVERSÃO
var jsonParseReceived = JSON.parse(jsonReceived);//JSON QUEBRADO NORMAL //STRING
var jsonReceived_OriginaL = jsonReceived;//SEM CONVERSÃO

//VARIÁVEIS

//ARRAYS
var itensTabela_TOTAL = [];
var itensTabela_CIDADES = [];
var itensTabela_count_CIDADES = [];
//ARRAYS

var data_array = jsonReceived_OriginaL.split(',');//QUEBRA TODO ARRAY;

//VERIFICAÇÃO DE ARQUIVO BASE LOOPING
var data_base_inicial = data_array[0];//INICIAL MÃE
var data_base_auxiliar = data_base_inicial.split(':');

var data_final = data_base_auxiliar[0].replace(/[|+\-:'",.<>\{\}\[\]\\\/]/gi, '');
//VERIFICAÇÃO DE ARQUIVO BASE LOOPING
itensTabela_TOTAL.push(data_final);
// alert(data_final);


//DECLARAR TABELAS
for(var a = 2; a <= 1360; a++){
  var loopingFor_base_inicial = data_array[a];//INICIAL MÃE
  var loopingFor_base_auxiliar = loopingFor_base_inicial.split(':');
  var loopingFor_final = loopingFor_base_auxiliar[0].replace(/[|+\-:'",.<>\{\}\[\]\\\/]/gi, '');
  if(loopingFor_final == data_final){
    break;
  }else{
    itensTabela_TOTAL.push(loopingFor_final); 
  }
}
//CRIAR BOTÕES TABELAS
for (var b = 0; b <= itensTabela_TOTAL.length; b++) {
 $(".dropdown-menu").append("<a class='dropdown-item' href='#' id='"+b+"'> " + itensTabela_TOTAL[b] + "</a>");   
}


let ultimo = JSON.parse(jsonReceived).length;//TAMANHO DO ARRAY
let body = "";

$( ".dropdown-item" ).click(function() {
  var id = $(this).attr('id');
  funcaoContarItens(id);
});

var varAuxiliar = [];
var varAuxiliar_count = [];


// function funcaoContarItens(id_recebido){
  let itemFinalPesquisa = itensTabela_TOTAL[14];
  var loopingForGetElementTable_main;
  var loopingForGetElementTable_secudary;
  var loopingForGetElementTable_clean;
  var loopingForGetElementTable_clean_second_position;
  for(var c = 0; c <= 200; c++){
    loopingForGetElementTable_main = data_array[c];
    loopingForGetElementTable_secudary = loopingForGetElementTable_main.split(':');
    loopingForGetElementTable_clean = loopingForGetElementTable_secudary[0].replace(/[|+\-:'",.<>\{\}\[\]\\\/]/gi, ''); 
    if (loopingForGetElementTable_clean == itemFinalPesquisa){
      loopingForGetElementTable_clean = loopingForGetElementTable_secudary[1].replace(/[|+\-:'",.<>\{\}\[\]\\\/]/gi, '');
      // for(var d = 0; d <= varAuxiliar.length; d++){
      //   if(varAuxiliar[d] == loopingForGetElementTable_clean){
      //     varAuxiliar_count[d] = (varAuxiliar_count[d] + 1);
      //   }else{
      //     varAuxiliar.push(loopingForGetElementTable_clean);
      //     varAuxiliar_count[d] = (varAuxiliar_count[d] + 1);
      //   }
      // }
      break;
      
    }
  }
// }

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
    value: 55,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: 55
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
