d3.csv('var1.csv', function (data) {
  // Variables
  var body = d3.select('body')
	var margin = { top: 0, right: 50, bottom: 50, left: 50 }
	var h = 650 - margin.top - margin.bottom
	var w = 740 - margin.left - margin.right
	
	//get dimensions based on window size

	// Scales

  	 // add the tooltip area to the webpage
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
    
    
  var xScale = d3.scale.linear()
    .domain([63,96])
    .range([0,w])
  var yScale = d3.scale.linear()
    .domain([8,36])
    .range([h,0])
	// SVG
	var svg = body.append('svg')
	    .attr('height',h + margin.top + margin.bottom)
	    .attr('width',w + margin.left + margin.right)
	  .append('g')
	    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
	// X-axis
	var xAxis = d3.svg.axis()
	  .scale(xScale)
  // Y-axis
	var yAxis = d3.svg.axis()
	  .scale(yScale)
	  
 var formatComma = d3.format(",")
 var formatDecimal = d3.format("0f")

  // Circles
  var circles = svg.selectAll('circle')
      .data(data)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.long1) })
      .attr('cy',function (d) { return yScale(d.lat) })
      .attr('r',function (d) { return d.l_t1 })
      .attr('stroke','black')
      .attr('stroke-width',0.5)
      .attr('fill',"#D4D4D4")
      .attr('opacity', 0.6)
      .on('mouseover', function (d) {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('r',function (d) { return d.l_t1*1.75 })
          .attr('stroke',function (d) { return d.color })
          .attr('fill',function (d) { return d.color })
          .attr('opacity', 0.7)
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip
          .html("<font size='2'>"+d["statename"]+"</font>"+"</br>"+"</br>"+ "<font size='4.25'>"+"<strong><span style='color:red'>" + d.pcname + "</span></strong>"+"</font>"+"</br>"+"</br>"+"Male electors: "+ formatComma(d["m_electors"])
          +"</br>"+"Female electors: "+ formatComma(d["f_electors"])+"</br>"+"Sex ratio (male per 1000 female): "+ formatComma(d["sex_ratio_e"])+"</br>"+"Male voter turnout: "+ formatDecimal(d["m_vote_turnout"])+"%"+"</br>"+"Female voter turnout: "+ formatDecimal(d["f_vote_turnout"])+"%"+"</br>"+"<font size='2.75'>"+"<strong>"+"Winning party: "+"<span style='color:"+d.color+"'>"+ d["party1"]+"</strong></font>");
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('r',function (d) { return d.l_t1 })
          .attr('stroke-width',0.5)
          .attr('stroke','black')
          .attr('fill',"#D4D4D4")
          .attr('opacity', 0.6)
          tooltip.transition()
               .duration(200)
               .style("opacity", 0);
      })
      
      function update() {
  updateScales();
  updateAxes();
}

W.addListener(update);

function updateScales() {
  var width = d3.min([W.getViewportWidth(), maxWidth]) - rightPadding;
  xScale.rangeBands([0, width], 0.04);
}

function updateAxes() {
  d3.select('.x.axis').call(xAxisComponent);
}


      
      
    


})