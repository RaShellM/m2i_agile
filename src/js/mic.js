function JS(){
	GetTextFromTxt();
	AddXMLData();
	Autocomplete();
	JsonAjax();
}

function GetTextFromTxt(){
	$("#btn-text-xml").click(function(){
		$("#text-generer").toggle(function(){
			$.ajax({
			url: "../src/txt/infos.txt",
			success: function(result){
				$("#text-generer").html(result);
			}
		});
		});
		
	});
}


function AddXMLData() {
	$("#btn-xml").click(function(){
		$(".xml-data").toggle(function(){
			$.ajax({
        type: "GET",
        url: "../src/xml/users.xml",
        dataType: "xml",
        success: function(myXml) {
            //Parser me fichier xml et recup les datas
            $(myXml).find('nom').each(function() {
                $(".xml-data").append($(this).text() + "<hr>");
            });

            $(myXml).find('prenom').each(function() {
                $(".xml-data").append($(this).text() + "<hr>");
            });
        	}
    		}); 
		});	
	});
}

//Autocomplete
function Autocomplete(){
	let ville = [
		"paris",
		"lyon",
		"marseille",
		"grenoble",
		"izeaux",
		"rives",
		"moirans",
		"voreppe",
		"meylan",
		"bordeaux",
		"toulouse",
		"caen",
		"dreux",
		"dieppe",
		"nantes",
		"rennes",
		"mayotte",
		"saint pierre",
		"saint denis",
		"la roche sur yons",
		"seine saint denis",
		"roubais",
		"toucoin",
		"arcachon",
		"epinal",
		"hier sur ambis",
		"itargue",
		"joullon",
		"karnak",
		"lorient",
		"orgique",
		"quaetre",
		"sevillon",
		"uber",
		"valencienne",
		"waterloo",
		"xixi",
		"zouzou",

	];
	$("#autocomplete").autocomplete({
		source: ville
	});
}

function JsonAjax(){
	$("#btn-json").click(function(){
		$("#json-ajax-request").toggle(function(){
			$.ajax({
				method: "POST",
				url: "../src/json/random.json",
				dataType: "json",
				success: function(myJson){
					
						$("#json-ajax-request").empty();
						Object.values(myJson).forEach(function(value){
							$("#json-ajax-request").append("Nom : " + value.name.first + " " + value.name.last + "<hr>");
							$("#json-ajax-request").append("<img src=" + value.picture + "/>" + "<hr>");
							$("#json-ajax-request").append("Compagnie : " + value.company + "<hr>");
							$("#json-ajax-request").append("Actif : " + value.isActive + "<hr>");
						});																
					 
				}
			});
		});
	});
	
}


