document.getElementById('my-file').addEventListener('change', handleFileSelect, false);

$('#my-file').on("change", function(){ 
	var nome_arquivo = $('#my-file')[0].files[0];
	
	$('.h3-arraste').css('margin-top', '10px');
	$('.img-excel').css('opacity', '1');
	$('.img-excel').css('display', 'inline-block');
	$('#btn-enviar').css('display', 'inline-block');
	; });



function ajax() {
	$.ajax({
		url:"index.html",
		success:function(dados){
			$("body").show().html("<div class='loader'>"+
			"<div class='inner one'></div>"+
			"<div class='inner two'></div>"+
			"<div class='inner three'></div>"+
		  "</div>");
			setTimeout(function(){
				window.location = "tabelas.html";
			}, 3000);
		}
	})
};

$("#process").on('click', function(event) {
	ajax();
           	 
});

// PROCESSAMENTO
var ExcelToJSON = function() {
	this.parseExcel = function(file) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {
				type: 'binary'
			});
			workbook.SheetNames.forEach(function(sheetName) {
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);
			console.log(JSON.parse(json_object));
			document.getElementById("excel").style = "display: none;";
			document.getElementById("process").style = "display: block;";
            sessionStorage.setItem('array-finalzao', json_object);
            var teste = sessionStorage.getItem('array-finalzao');
        })
		};
		reader.onerror = function(ex) {
			console.log(ex);
		};
		reader.readAsBinaryString(file);
	};
};

function handleFileSelect(evt) {
    var files = evt.target.files;
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
}


$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
    tbClientes = JSON.parse(tbClientes); // Converte string para objeto
    if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];
});
 










