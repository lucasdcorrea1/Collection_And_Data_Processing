var jsonReceived = sessionStorage.getItem('array-finalzao');//SEM CONVERSÃO
var jsonParseReceived = JSON.parse(jsonReceived);//JSON QUEBRADO NORMAL //STRING

let body = "";
let count;
let count2;
let dataValue_reveived;
let dataValue_reveived2
let somatorioFinalIdadesMedia;

var ctx = document.getElementById("myChart").getContext("2d");
var dataAtual = new Date();
var mes    = dataAtual.getMonth()+1;    
var ano    = dataAtual.getFullYear()-2000;     
var data = [];
var keys = [];

let arrayColor_R = [];
let arrayColor_G = [];
let arrayColor_B = [];
let arrayGlobalIdade = [];
let arrayGlobalIdadeCount = [];
let idadesVars = [];
let nameVars = [];
let stringFinal;
let stringFinal2; 
let R;
let G;
let B;
let typeData; //0 - AMERICANO;//1 - BRASILEIRO
let typeSystem;

//PEGA O NOME DAS TABELAS
_.each( jsonParseReceived[0], function( val, key ) {
  keys.push(key);
});
$(".card-title").text("TABELA: VAZIO");

//JOGA NA DROPDOWN OS DADOS AUTOMATICAMENTE
for (var i = 0; i <= keys.length; i++) {
  $(".dropdown-menu").append("<a class='dropdown-item' href='#' id='"+i+"'> " + keys[i] + "</a>");     
}

$( ".dropdown-item" ).click(function() {
  $('#dropdown1').css('display', 'none');
  $('#tudotest').css('display', 'block');
  var id = $(this).attr('id');
  functionSystemReload(keys[id]);
  $(".card-title").text("TABELA: "+keys[id]);
  $("#dropdownMenuLink").text("SELECIONADO: "+keys[id]);
  $("#dropdownMenuLinkModal").text("SELECIONADO: "+keys[id]);
  $("#title_graph").text(keys[id]);
  $("#title_teble").text(keys[id]);
  $('#exampleModalLong').modal('hide')

});

var old_html = $(".graficos").html();

function functionSystemReload(atrb){

//RESET VARIAVEIS | VETORES
dataValue_reveived2 = [];
dataValue_reveived = [];
count2 = null;
typeData = null;                //TIPO DE DATA -> AMERICANO OU BRASILEIRO
typeSystem = null;              //TIPO DE DATA -> SE É DATA OU NÃO
arrayColor_R = [];
arrayColor_G = [];
arrayColor_B = [];


$(".graficos").html(old_html);  //CHAMAR OS GRÁFICOS
let artbReceived = atrb;        //ATRIBUTO RECEBIDO PELO DROP-MENU

//VAI AGRUPAR NO JSON PRINCIPAL COLUNAS REPETIDAS DADAS PELO ATRIBUTO, ex: Sexo - UNIR M e UNIR F
count = _.countBy(jsonParseReceived, artbReceived); 
dataValue_reveived = _.map(count, function(value, key){
  return {
    name: key,
    valor: value
  };
});

//RESET PIZZA
if(window.myNewChart1 != null){
  window.myNewChart1.destroy();
  data = [];
}

$(".graficos").append("<h3 class='h3-modificacoes' style='color:#FF0000!important'> QUANTIDADE( % ) <small class='text-muted'> ITEM </small></h3>"); 
let somatoria = 0;

//REPETIÇÃO PRINCIPAL
for(var k = 0; k <= dataValue_reveived.length-1; k++){
  let valorTemporario = dataValue_reveived[k].valor;
  let nomeTemporario = dataValue_reveived[k].name;

//FUNCAO_DATA
var temporarioVet;
temporarioVet = nomeTemporario.split("/");

//VERIFICACAO SE É DATA OU NÃO
if(typeSystem == null){
  if(temporarioVet[2] == null){
    typeSystem = null;//NAO É DATA
  }else{
    typeSystem = 1;//VERIFICOU E RETORNOU QUE É DATA
  }
}

//VERIFICOU E É DATA
if(typeSystem == 1){
  if(typeData == null){
    callVerificationData(temporarioVet[0],temporarioVet[1],temporarioVet[2]);
  }
  idadeFinal_temp = callIdade(temporarioVet[0],temporarioVet[1],temporarioVet[2]);
  valorTemporario = idadeFinal_temp;
}

//FIM FUNCAO_DATA

somatoria = somatoria + valorTemporario;//SOMATÓRIA DO VALOR TOTAL DE 'VALUES'
if(nomeTemporario == ""){
  nomeTemporario = ":( Não Preenchido"
}

R = Math.floor(Math.random() * 255);
G = Math.floor(Math.random() * 255);
B = Math.floor(Math.random() * 255);

stringFinal = "rgb("+R+","+G+","+B+")";
stringFinal2 = "rgb("+B+","+R+","+G+")" 

arrayColor_R.push(R);
arrayColor_G.push(G);
arrayColor_B.push(B);

arrayGlobalIdade.push({
    id:valorTemporario,
    value:1
});

//REFORÇA A VERIFICAÇÃO SE NÃO FOR DATA
if(typeSystem == null){
 data.push(
 {
  value: valorTemporario,
  color: stringFinal,
  highlight: stringFinal2,
  label: nomeTemporario
},
)  
}

}//FIM FOR


//FUNÇÃO DE IDADE

//CONTARÁ AS IADDES IGUAIS E SEPARÁ POR IDADES: QUANTIDADE DE PESSOAS COM A MESMA IDADE
count2 = _.countBy(arrayGlobalIdade,'id');
dataValue_reveived2 = _.map(count2, function(value, key){
  return {
    name: key,
    valor: value
  };
});

if(typeSystem == 1){//SE O SISTEMA FOR DE DATA
  //FUNÇÃO SIMPLES PARA VERIFICAÇÃO DE FAIXAS ETÁRIAS
  idadesVars = [0,0,0,0];//'18-23 anos','24-30 anos','31-35 anos','36-55 anos'
  nameVars = ['18-23 anos','24-30 anos','31-35 anos','36-55 anos'];//VETOR ESPELHO NOME
  
  for(var o = 0; o <= dataValue_reveived2.length-1; o++){
    let intauxIdadeVars = parseInt(dataValue_reveived2[o].name);
    if(intauxIdadeVars >= 18 && intauxIdadeVars <= 24){
      idadesVars[0] += dataValue_reveived2[o].valor;
    }
    if(intauxIdadeVars >= 25 && intauxIdadeVars <= 30){
      idadesVars[1] += dataValue_reveived2[o].valor;
    }
    if(intauxIdadeVars >= 31 && intauxIdadeVars <= 35){
      idadesVars[2] += dataValue_reveived2[o].valor;
    }
    if(intauxIdadeVars >= 36 && intauxIdadeVars <= 55){
      idadesVars[3] += dataValue_reveived2[o].valor;
    }
}
somatorioFinalIdadesMedia = idadesVars[0]+idadesVars[1]+idadesVars[2]+idadesVars[3];

for(var p = 0; p < 4; p++){
  stringFinal = "rgb("+arrayColor_R[p]+","+arrayColor_G[p]+","+arrayColor_B[p]+")";
  stringFinal2 = "rgb("+arrayColor_R[p]+","+arrayColor_G[p]+","+arrayColor_B[p]+")";
  
  data.push(
    {
     value: idadesVars[p],
     color: stringFinal,
     highlight: stringFinal2,
     label: nameVars[p]
   },
  )
}

}
window.myNewChart1 = new Chart(ctx).Pie(data);
callFuncionTable(somatoria);

}//FIM FUNCAO

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNÇÃO PARA CALCULAR A IDADE DO USUÁRIO E RETORNAR ELA JÁ TODA CALCULADA
function callIdade(val1,val2,val3){
  var local_mes = parseInt(val1);
  var local_dia = parseInt(val2);
  var local_ano = parseInt(val3);
  var local_ano_gambiarra = ano + 100;
  var idadeFinal_temp;
  var idadeFinal;

if(typeData == 0){//PADRÃO AMERICANO   //val1 = mes; val2 = dia; val3 = ano.
if(local_ano > 40){//1940
  idadeFinal_temp = (local_ano_gambiarra - local_ano);
  
  }else if (local_ano >= 0 && local_ano <= ano) {//entre 2000 e 2019
    idadeFinal_temp = (ano - local_ano);
  }
  if(mes >= local_mes ){
  }else{
    idadeFinal_temp = idadeFinal_temp-1;
  }
  return idadeFinal_temp;
}
if(typeData == 1){//PADRÃO BRASILEIRO   //val1 = dia; val2 = mes; val3 = ano.
  if(local_ano > 40){//1940
    idadeFinal_temp = (local_ano_gambiarra - local_ano);
    
    }else if (local_ano >= 0 && local_ano <= ano) {//entre 2000 e 2019
      idadeFinal_temp = (ano - local_ano);
    }
    if(mes >= local_dia ){
    }else{
      idadeFinal_temp = idadeFinal_temp-1;
    }
    return idadeFinal_temp;
  }
}

//FUNÇÃO PARA VERIFICAR QUAL O PADRÃO DE DATA
//MM/DD/AA OU DD/MM/AA
function callVerificationData(val_1,val_2,val_3){
  for(var m = 0; m <= dataValue_reveived.length-1; m++){
    if(val_1 > 12){
      typeData = 1;
      break;
    }else if (val_2 > 12) {
      typeData = 0;
      break;
    }else{
      typeData = 0;
    }
  }
  ;}

//FUNÇÃO PARA ADICIONAR NA TABELA OS VALORES ÚTEIS
function callFuncionTable(finalValue){  
  if(typeSystem == 1){//SE O SISTEMA FOR DE DATA
    for(var l = 0; l < 4; l++){
      let valorTemporario_2 = idadesVars[l];
      let nomeTemporario_2 = nameVars[l];
      let receivedValue = somatorioFinalIdadesMedia;
      let porcentagem =  Math.round((valorTemporario_2 / receivedValue) * 100);
      if(nomeTemporario_2 == ""){
        nomeTemporario_2 = ":( Não Preenchido"  
      }
      $(".graficos").append("<h3 class='h3-modificacoes' style='color: rgba("+arrayColor_R[l]+","+arrayColor_G[l]+","+arrayColor_B[l]+",1)!important'>"+ valorTemporario_2 + "( "+porcentagem+"% ) <small class='text-muted'>"+ nomeTemporario_2 +" anos</small></h3>"); 
    }
  
  }else{
//OUTROS ITENS  
  for(var l = 0; l <= dataValue_reveived.length-1; l++){
    let valorTemporario_2 = dataValue_reveived[l].valor;
    let nomeTemporario_2 = dataValue_reveived[l].name;
    let receivedValue = finalValue;
    let porcentagem =  Math.round((valorTemporario_2 / receivedValue) * 100);
    if(nomeTemporario_2 == ""){
      nomeTemporario_2 = ":( Não Preenchido"  
    }
    $(".graficos").append("<h3 class='h3-modificacoes' style='color: rgba("+arrayColor_R[l]+","+arrayColor_G[l]+","+arrayColor_B[l]+",1)!important'>"+ valorTemporario_2 + "( "+porcentagem+"% ) <small class='text-muted'>"+ nomeTemporario_2 +"</small></h3>"); 
  }
} 
}