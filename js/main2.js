
var keyArray=["Russian_Speakers"];
var expressed = keyArray[0];


window.onload=initialize();

function initialize(){
	setMap();
}

function setMap(){

	
   


	
	var width =960;

	var height= 460;
	
	var map= d3.select("#wrapper")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
		/* 	.attr("class","wrapper"); */
			
	
/*
var projection = d3.geo.albersUsa()
    .scale(1000)
    .translate([width / 2, height / 2]);
*/

var projection = d3.geo.mercator()
    .scale(7000)
    .center([395, 50])
    .translate([width / 2, height / 2])
    .precision(.1);

	

var graticule = d3.geo.graticule()
    .step([5, 5]);
    
var path = d3.geo.path()
    			.projection(projection);

/* note add graticule to map after projection */
map.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);
    
    var gratBackground=map.append("path")
    	.datum(graticule.outline)
    	.attr("class","gratBackground")
    	.attr("d",path)
    	
    var gratLines=map.selectAll(".gratLines")
    	.data(graticule.lines)
    	.enter()
    	.append("path")
    	.attr("class","gratLines")
    	.attr("d",path);
	
	//keep	
	
	
	/* d3.json("data/uk.topojson", function(error, uk){ */
	/* console.log(wi); */
	
/*
	var ukraine = map.append("path")
		.datum(topojson.object(uk,uk.objects.ukrainetopo))
		.attr("class","ukraine")
		.attr("d",path)
*/
		
	/*
	
	.append("path")
    .datum(topojson.mesh(uk, uk.objects.ukrainetopo, function(a, b) { return a !== b && a.id !== 		"IRL"; }))
    .attr("d", path)
    .attr("class", "subunit-boundary");
*/
		
	/* }); */
	
	
	
	d3.json("data/slovakia.topojson", function(error, sl){
	var slovakia = map.append("path")
		.datum(topojson.object(sl,sl.objects.slovakiatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/romania.topojson", function(error, ro){
	var romania = map.append("path")
		.datum(topojson.object(ro,ro.objects.romaniatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/poland.topojson", function(error, po){
	var poland = map.append("path")
		.datum(topojson.object(po,po.objects.polandtopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/moldova.topojson", function(error, mo){
	var moldova = map.append("path")
		.datum(topojson.object(mo,mo.objects.moldovatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/hungary.topojson", function(error, hu){
	var hungary = map.append("path")
		.datum(topojson.object(hu,hu.objects.hungarytopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/belarus.topojson", function(error, be){
	var belarus = map.append("path")
		.datum(topojson.object(be,be.objects.belarustopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/russia.topojson", function(error, ru){
	var russia = map.append("path")
		.datum(topojson.object(ru,ru.objects.russiatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/albania.topojson", function(error, al){
	var albania = map.append("path")
		.datum(topojson.object(al,al.objects.albaniatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/austria.topojson", function(error, au){
	var austria = map.append("path")
		.datum(topojson.object(au,au.objects.austriatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/bosnia.topojson", function(error, bo){
	var bosnia = map.append("path")
		.datum(topojson.object(bo,bo.objects.bosniatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/bulgaria.topojson", function(error, bu){
	var bulgaria = map.append("path")
		.datum(topojson.object(bu,bu.objects.bulgariatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/czech.topojson", function(error, cz){
	var czech = map.append("path")
		.datum(topojson.object(cz,cz.objects.czechtopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/germany.topojson", function(error, ge){
	var germany = map.append("path")
		.datum(topojson.object(ge,ge.objects.germanytopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/kosova.topojson", function(error, ko){
	var kosova = map.append("path")
		.datum(topojson.object(ko,ko.objects.kosovatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});

	d3.json("data/greece.topojson", function(error, gr){
	var greece = map.append("path")
		.datum(topojson.object(gr,gr.objects.greecetopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/lithuania.topojson", function(error, li){
	var lithuania = map.append("path")
		.datum(topojson.object(li,li.objects.lithuania))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/latvia.topojson", function(error, la){
	var latvia = map.append("path")
		.datum(topojson.object(la,la.objects.latviatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/france.topojson", function(error, fr){
	var france = map.append("path")
		.datum(topojson.object(fr,fr.objects.francetopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/macedonia.topojson", function(error, ma){
	var macedonia = map.append("path")
		.datum(topojson.object(ma,ma.objects.macedoniatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	d3.json("data/serbia.topojson", function(error, se){
	var serbia = map.append("path")
		.datum(topojson.object(se,se.objects.serbia))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/slovenia.topojson", function(error, sl){
	var slovenia = map.append("path")
		.datum(topojson.object(sl,sl.objects.slovenia))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/montenegro.topojson", function(error, mo){
	var montenegro = map.append("path")
		.datum(topojson.object(mo,mo.objects.montenegrotopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/croatia.topojson", function(error, cr){
	var croatia = map.append("path")
		.datum(topojson.object(cr,cr.objects.croatiatopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/belgium.topojson", function(error, be){
	var belgium = map.append("path")
		.datum(topojson.object(be,be.objects.belgiumtopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/denmark.topojson", function(error, den){
	var denmark = map.append("path")
		.datum(topojson.object(den,den.objects.denmarktopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/italy.topojson", function(error, it){
	var italy = map.append("path")
		.datum(topojson.object(it,it.objects.italytopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/turkey.topojson", function(error, tu){
	var turkey = map.append("path")
		.datum(topojson.object(tu,tu.objects.turkeytopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/sweden.topojson", function(error, se){
	var sweden = map.append("path")
		.datum(topojson.object(se,se.objects.swedentopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	d3.json("data/switzerland.topojson", function(error, sw){
	var switzerland = map.append("path")
		.datum(topojson.object(sw,sw.objects.switzerlandtopo))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/kazakstan.topojson", function(error, ka){
	var kazakstan = map.append("path")
		.datum(topojson.object(ka,ka.objects.kazakstan))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	d3.json("data/georgia.topojson", function(error, ge){
	var georgia = map.append("path")
		.datum(topojson.object(ge,ge.objects.collection))
		.attr("class","countries")
		.attr("d",path)
		
	});
	
	
	



	
	
	

d3.csv("data/ukraineData2.csv", function(csvData){

var recolorMap = colorScale(csvData);
drawLegend(csvData);


d3.json("data/ukraine_provinces2.topojson", function(error, uk){

	var jsonProvinces=uk.objects.ukraineProvinces.geometries;
	
	for(var i=0;i<csvData.length;i++){
				var csvProvince=csvData[i]; //the current county
				var csvProvinceName=csvProvince.NAME_1;
				
				//loop through counties to find the right county
				for (var a=0; a<jsonProvinces.length;a++){
					if(jsonProvinces[a].properties.NAME_1==csvProvinceName){
	
							var key=keyArray[0];
							var russian_speaker=parseFloat(csvProvince[key]);
							jsonProvinces[a].properties[key]=russian_speaker;
							console.log(jsonProvinces);
							
					/*

						
						jsonProvinces[a].properties.Name_1=csvCounty.Name_1;
*/
						
					};
				};
			};
			
			
		var provinces = map.selectAll(".provinces")
		.data(topojson.object(uk,uk.objects.ukraineProvinces).geometries)
		.enter()
		.append("path")
		.attr("class","provinces")
		.attr("id",function(d){
		var finalId= d.properties.NAME_1.replace(" ","");
			finalId = finalId.replace(" ","");
			finalId = finalId.replace(".","");
			finalId=finalId.replace("'","");
			return finalId
		})
		.attr("d",path)
		.style("fill", function(d) { //color enumeration units
						return choropleth(d, recolorMap);
					})
		.on("mouseover", highlight)
		.on("mouseout", dehighlight)
		.on("mousemove", moveLabel)
		.append("desc") //append the current color as a desc element
						.text(function(d) { 
							return choropleth(d, recolorMap); 
				   		});
	
		
				 });
		});

	
	
}; //end of setMap()



function colorClass(){
	//<-colorScale
	//<-drawLegend
	
	return [
			"#fdcc8a",
			"#fc8d59",
			"#e34a33",
			"#b30000"
	];
};



function colorScale(csvData){

	//create quantile classes with color scale
	var colors = colorClass();
	var color = d3.scale.quantile() //designate quantile scale generator
		.range(colors);
		/*
.range([
			
			"#fdcc8a",
			"#fc8d59",
			"#e34a33",
			"#b30000"
		]);
		
*/
		//set min and max data values as domain
	color.domain([
		d3.min(csvData, function(d) { return Number(d[expressed]); }),
		d3.max(csvData, function(d) { return Number(d[expressed]); })
	]);
	
	

	//return the color scale generator
	return color;	

};
	
function choropleth(d, recolorMap){
	//<-setMap d3.json provinces.style
	
	//Get data value
	var value = d.properties[expressed];
	//If value exists, assign it a color; otherwise assign gray
	if (value) {
		return recolorMap(value);
	} else {
		return "#fef0d9";
	};
};

function dehighlight(data){

	var recolorMap = colorScale(data);
	var props = datatest(data);	//standardize json or csv data
	
	
	
	var prov = d3.select("#"+props.NAME_1); //designate selector variable for brevity
	var fillcolor = prov.select("desc").text();  //access original color from desc
	prov.style("fill", fillcolor); //reset enumeration unit to orginal color
	
	d3.select("#"+props.NAME_1+"label").remove(); //remove info label
	
};

function highlight(data){
	var props= datatest(data);
	d3.select("#"+props.NAME_1)//select the current county in the dome	
		.style("fill","#ffffff");
		
	var labelAttribute="<h1>"+props[expressed]+"%"+"</h1><br><b>"+ "Russian Speakers"+"</b>&nbsp;&nbsp;&nbsp;&nbsp;"+props.NAME_1;
	
	/* var labelName=props.NAME;	 */
	
	var infolabel=d3.select("#wrapper").append("div")
		.attr("class","infolabel")
		.attr("id", props.NAME_1+"label")
		.html(labelAttribute);
		/*
.append("div")
		.attr("class", "labelname")
		.html(labelName);
*/
			
		
};

function datatest (data){
	
	if(data.properties){
		return data.properties;
	}else{
		return data;
	}
	
};

function computeBounds(csvData){
	//<-colorScale
	//<-updateLegend
	
	//set min and max values for current dataset
	var datamin = d3.min(csvData, function(d){
		return Number(d[expressed]);
	});
	var datamax = d3.max(csvData, function(d){
		return Number(d[expressed]);
	});
	
	return [datamin,datamax]; //array with upper and lower bounds
}

function moveLabel(){
	var x=d3.event.clientX+10;
	var y=d3.event.clientY;//+300;
	d3.selectAll(".infolabel")
		.style("margin-left", x+"px")
		.style("margin-top", y+"px");
};

function drawLegend(csvData) {
	//<-setMap d3.csv
	
	var colorsArray = colorClass(); //-> get the array of choropleth colors
	
	//create a legend div
	var legend = d3.select("#wrapper")
		.append("div")
		.attr("id", "legend");
	
	//create the legend title in a child div
	var legtitle = legend.append("div")
		.attr("id","legtitle")
		.html("<h3>%Russian Speakers</h3>")
		
	//create a child div to hold the color scale
	var legendColors = legend.append("div")
		.attr("id", "legendColors");
		
	//create and color each div in the color scale
	var colorbox = legendColors.selectAll(".colorbox")
		.data(colorsArray.reverse()) //highest value on top
		.enter()
		.append("div")
		.attr("class","colorbox")
		.style("background-color", function(d){
			return d;
		});
		
	//create a div for the number scale
	var legendScale = legend.append("div")
		.attr("id", "legendScale");
	
	//create a div for the attribute name	
	var attributeName = legend.append("div")
		.attr("id","attributeName");
	
		
	//fill in the legend with dynamic data	
	updateLegend(csvData); //->
};

function updateLegend(csvData){
	//<-drawLegend
	//<-sequence
	
	//generate an array of legend values
	var colScale = colorScale(csvData); //-> get the quantile scale generator
	var quantiles = colScale.quantiles(); //get the quantile bounds
	var databounds = computeBounds(csvData); //-> get the upper and lower data bounds // this is the problem
	var datascale = [databounds[1]]; //create an array variable for numbers with upper limit
	//add middle quantile bounds to array
	for (var i=quantiles.length-1; i>=0; i--){
		datascale.push(quantiles[i]); 
	};
	datascale.push(databounds[0]); //add lower limit to array
	
	var legend = d3.select("#legend"); //select the legend div
	
	//create a separate div to hold each number in the number scale
	var legendNum = legend.select("#legendScale")
		.selectAll(".legendNum")
		.data(datascale)
		.enter()
		.append("div")
		.attr("class","legendNum")
		.html(function(d){
			return Math.round(d)
		});
		
	//update the numbers according to the current datascale
	legend.selectAll(".legendNum")
		.html(function(d){
			return Math.round(d)
		});
	
	//update the attribute name according to the current attribute	
	/*
legend.select("#attributeName")
		.html("<h3>"+expressed+"</h3>");	
*/
};



