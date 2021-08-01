function showhide(t)
{
    var buttonID = t.id;
    var lineID = '#' + buttonID.replace('button', 'line');
    var opacity = d3.select(lineID).style("opacity");

    if(opacity == 0)
    {
            d3.select(lineID)
            .style("opacity", 1);
    }
    else
    {
            d3.select(lineID)
            .style("opacity", 0);
    }
}