var jsonReceived = sessionStorage.getItem('array-finalzao');//SEM CONVERSÃO
var jsonParseReceived = JSON.parse(jsonReceived);//JSON QUEBRADO NORMAL //STRING
let body = "";
let count;
let dataValue_reveived;
var ctx = document.getElementById("myChart").getContext("2d");

var data = [];
var keys = [];
let arrayColor_R = [];
let arrayColor_G = [];
let arrayColor_B = [];



_.each( jsonParseReceived[0], function( val, key ) {
  keys.push(key);
});
$(".card-title").text("TABELA: VAZIO");

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
  $(".graficos").html(old_html);
  let auxiliarLoli = atrb;
  arrayColor_R = [];
  arrayColor_G = [];
  arrayColor_B = [];
  count = _.countBy(jsonParseReceived, auxiliarLoli);

  dataValue_reveived = _.map(count, function(value, key){
    return {
      name: key,
      valor: value
    };
  });

  if(window.myNewChart1 != null){
    window.myNewChart1.destroy();
    data = [];
  }
  $(".graficos").append("<h3 class='h3-modificacoes' style='color:#FF0000!important'> QUANTIDADE( % ) <small class='text-muted'> ITEM </small></h3>"); 
  let somatoria = 0;
  for(var k = 0; k <= dataValue_reveived.length-1; k++){
   let valorTemporario = dataValue_reveived[k].valor;
   let nomeTemporario = dataValue_reveived[k].name;
   somatoria = somatoria + valorTemporario;
   if(nomeTemporario == ""){
    nomeTemporario = ":( Não Preenchido"
  }
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  let stringFinal = "rgb("+R+","+G+","+B+")";
  let stringFinal2 = "rgb("+B+","+R+","+G+")" 

  arrayColor_R.push(R);
  arrayColor_G.push(G);
  arrayColor_B.push(B);
  data.push(
  {
    value: valorTemporario,
    color: stringFinal,
    highlight: stringFinal2,
    label: nomeTemporario
  },
  )    
}

window.myNewChart1 = new Chart(ctx).Pie(data);
callFuncionTable(somatoria);
}
function callFuncionTable(finalValue){  
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

