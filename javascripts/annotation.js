function DrawCoalToolTip(x,y)
{
    var tooltipCoal = d3.select('g')
    .append("g").attr('id','tooltipCoal')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;

    tooltipCoal.append("rect")
    .attr("id","coaltooltipRect")
    .attr("x", leftTooltipBox-5)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "red")
    .attr('opacity','0')
    .transition().duration(6000).attr('opacity','0.5');

    tooltipCoal.append('text')
    .attr('id','coalText')
    .style('font-size' , '10')
    .style('visibility', 'visible')
    .attr('x',leftTooltipBox)
    .attr('y','30')
    .append('tspan')
    .text("Coal")
}

function DrawOilToolTip(x,y)
{
    var tooltipOil = d3.select('g')
    .append("g").attr('id','tooltipOil')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;

    tooltipOil.append("rect")
    .attr("id","oiltooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "pink")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipOil.append('text')
    .attr('id','oilText')
    .style('font-size' , 10)
    .attr('x',leftTooltipBox)
    .attr('y','60')
    .append('tspan')
    .text("Petroleum Oil")
}

function DrawGasToolTip(x,y)
{
    var tooltipGas = d3.select('g')
    .append("g").attr('id','tooltipGas')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipGas.append("rect")
    .attr("id","gastooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "green")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipGas.append('text')
    .attr('id','gasText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Natuaral Gas")
}

function CementToolTip(x,y)
{
    var tooltipCement = d3.select('g')
    .append("g").attr('id','tooltipCement')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipCement.append("rect")
    .attr("id","cementtooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "purple")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);;

    tooltipCement.append('text')
    .attr('id','cementText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Cement")
}

function FlareToolTip(x,y)
{
    var tooltipFlare = d3.select('g')
    .append("g").attr('id','tooltipFlare')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipFlare.append("rect")
    .attr("id","flaretooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "olive")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipFlare.append('text')
    .attr('id','flareText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Flare")
}

function OtherToolTip(x,y)
{
    var tooltipOther = d3.select('g')
    .append("g").attr('id','tooltipOther')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipOther.append("rect")
    .attr("id","othertooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',80)
    .attr("height",35)
    .style("fill", "magenta")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);;

    tooltipOther.append('text')
    .attr('id','otherText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Other") 
}