function DrawChart(data)
{
    var margin = {top:15, left:150, right:50, botton:30};
    var width = 600 - margin.left - margin.right;
    var height = 500 - margin.top - margin.botton;

        var causeData = GetCauseCount(data);
        var causes = GetCauses(data);

        var domainStart = d3.min(causeData)
        var domainEnd = d3.max(causeData)

        // append the svg object to the body of the page
        var svg = d3.select("#my_dataviz")
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.botton)
            .style('background-color', '#D3D3D3')
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        // X axis
        var x = d3.scaleLinear()
            .domain([domainStart, domainEnd])
            .range([ 0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat((d) => '').tickSize(0))

        // Y axis
        var yaxis = d3.scaleBand()
        .domain(causes)    
        .range([ 0, height ])


        svg.append("g")
            .call(d3.axisLeft(yaxis))

            var y = d3.scaleLinear()
            .domain([0, 20])
            .range([ 0, height ])

            var yColor = d3.scaleLinear().domain([0,20]).range(['red','blue']); 
        //Bars
        svg.selectAll("rect")
            .data(causeData)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", function(d, i) { return y(i) + 5})
            .attr("width", function(d) { return x(d); })
            .attr("height", 15 )
            .style('fill', function(d,i) {return yColor(i)})

        
            d3.select('svg')//.append("g").attr('id','highlight')
            //.attr("transform","translate(" + margin.left + "," + margin.top + ")")
            .append('rect')
            .attr('x',margin.left - 130)
            .attr('y',margin.top-10)
            .attr('height',80)
            .attr('width',width + margin.left)
            .style('opacity', 0.5)
            .style('fill', 'orange')
            .transition()
            .duration(4000)
            .style('fill', 'red')


            //text labels on bars

            var valueText = d3.select('g')
            .append("g").attr('id','valuetext')
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
     
            valueText.selectAll('text')
            .data(causeData)
            .enter()
            .append('text')
            .style('font-size' , '15')
            .style('visibility', 'visible')
            .attr('x',function(d) { 100; })
            .attr('y', function(d, i) { return y(i) })
            .text(function(d) {return d})


            svg.append('circle')
            .attr('id','my_cir')
            .attr('cx', 300)
            .attr('cy', 90)
            .attr('r',20)
            .style('fill','none')
            .style('stroke-width','1')
            .on('mouseover', function() { d3.select('#causeofdeathtooltip').transition().duration(700).style('opacity',1)})
            .on('mouseout', function() {d3.select('#causeofdeathtooltip').transition().duration(700).style('opacity',0)})


            svg.append('circle')
            .attr('id','my_cir2')
            .attr('cx', 300)
            .attr('cy', 90)
            .attr('r',10)
            .style('fill','#5d1818')
            .style('stroke-width','1')
            .on('mouseover', function() {d3.select('#causeofdeathtooltip').transition().duration(700).style('opacity',1)})
            .on('mouseout', function() {d3.select('#causeofdeathtooltip').transition().duration(700).style('opacity',0)})

            GlowDot();

            svg.append('text')
            .style('font-size' , '15')
            .style('visibility', 'visible')
            .attr('x',margin.left + 10)
            .attr('y', height + 20)
            .text("Global death count")

            svg.append('text')
            .style('font-size' , '15')
            .style('visibility', 'visible')
            .attr('x',120)
            .attr('y', 120)
            .text("Causes of Death")
            .attr('transform', 'rotate(90)')

}


function GetYearSorted(data, currentYearParam)
{
    arrKeyValue = []

    data.forEach((row) => {

        var obj = {_cause : row["Cause"], _causecount : parseInt(row[currentYearParam])};
        arrKeyValue.push(obj);
    });

    arrKeyValue.sort((a, b) => {
        return b["_causecount"] - a["_causecount"];
    });

    return arrKeyValue;
}

function GetCauseCount(data)
{
    return data.map(function(d) { return d._causecount})
}

function GetCauses(data)
{
    return data.map(function(d) { return d._cause; })
}

function CausesOfDeathBanner()
{
    
    /*var div = d3.select("body")
	.append("div")
	.attr("class", "fixedDiv")
	.html("Are we in a healthy world?")
    //div.html("This is a fixed div<br>based on SVG position")
	.style("top", 200 + "px")
	.style("left", 400 + "px")
    .transition()
    .duration(1000)
    .html("world");


    d3.select("body")
	.append("div")
    .style("top", 100 + "px")
	.style("left", 400 + "px")
	.attr("class", "fixedDiv")
	.html("Are we in a healthy world?")
    .append('p')
    .transition()
    .duration(2500)
    .text("Message 1")
    .style("background-color","red")
    .style("font-size","20px")
*/

    d3.select("body")
    .append("div")
    .attr('id', 'causeofdeathtooltip')
    .style("top", 280 + "px")
	.style("left", 750 + "px")
    .style('opacity',0)
	.attr("class", "fixedDiv")
    .html("<p>Air pollution is the leading cause of death in developing countries</p><img src='./images/april_ambient_air_pollution.jpg'></img>");
}

function HiglightPoint(){

    d3.select("#my_cir")
  
      // First, make the bar wider
      .transition()
      .duration(1000)
      .attr("r", "15")
      .style("fill", "orange")
  
      .transition()
      .duration(1000)
      .attr("r", "10")
      .style("fill", "#5d1818");    
  }
  
  function GlowDot() {
    setInterval(HiglightPoint, 2500);
  }