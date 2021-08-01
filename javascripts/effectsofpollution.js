function CreateBanner()
{
    var margin = {top:15, left:150, right:50, botton:30};
    var width = 600 - margin.left - margin.right;
    var height = 500 - margin.top - margin.botton;

    var effect = [
                    "Economical Effect",
                    "Social Economical",
                    "Psychological Effect",
                ]



    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.botton)
        .style('background-color', '#D3D3D3')
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


        svg.append('rect').attr('id', 'rect_id1')            
        .attr('x', 10)
        .attr('y',20)
        .attr('height', 20)
        .attr('width', 30)
        .style('fill','olive')

        svg.append('rect').attr('id', 'rect_id2')            
        .attr('x', 10)
        .attr('y',50)
        .attr('height', 20)
        .attr('width', 30)
        .style('fill','orange')        

        d3.selectAll('rect').on('mouseover', function() {GrowRect(this);})
        d3.selectAll('rect').on('mouseout', function() {ResetRect(this);})

}


function GrowRect(r)
{
    d3.select("#" + r.id)
    .transition()
    .duration(1000)
    .attr('width',60);

    ShowDescription(r)
}

function ResetRect(r)
{
    d3.select("#" + r.id)
    .transition()
    .duration(1000)
    .attr('width',30);
}

function ShowDescription(r)
{
    var message = "";
    if(r.id == "rect_id1")
        message = "Olive"
    else
        message = "Orange"


    d3.select("body")
    .append("div")
    .style("top", 300 + "px")
    .style("left", 400 + "px")
    .attr("class", "fixedDiv")
    .html(message)
    .append('p')
    .transition()
    .duration(2500)
    .text("Message 1")
    .style("background-color","red")
    .style("font-size","20px")
}