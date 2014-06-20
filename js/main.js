window.onload=initialize();

function initialize(){
	setMap();
}

function setMap(){



	var width = 960;
	var height= 460;
	
	var map= d3.select("body")
			.append("svg")
			.attr("width",width)
			.attr("height",height);
			
	
/*
var projection = d3.geo.albersUsa()
    .scale(1000)
    .translate([width / 2, height / 2]);
*/

var projection = d3.geo.mercator()
    .scale(4000)
    .center([400, 50])
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
	svg.append("path")
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
	
	
	
	d3.json("data/city.topojson", function(error, c){
	
	var cities = map.append("path")
		.datum(topojson.object(c,c.objects.city))
		.attr("d",path)
		
	});


	
d3.json("data/ukraine_Provinces.topojson", function(error, c){
	
	var cities = map.append("path")
		.datum(topojson.object(c,c.objects.ukraineProvinces))
		.attr("d",path)
		.attr("class","provinces")
		
	});
}

