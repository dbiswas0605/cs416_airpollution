function CreateMainChart() {

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 300, bottom: 50, left: 80 },
        width = 800 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style('background-color', '#D3D3D3')
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    svg.append("circle")
        .attr('id', 'my_cirOil')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'pink')
        .style('stroke-width', '1');

    svg.append("circle")
        .attr('id', 'my_cirCoal')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'red')
        .style('stroke-width', '1');

    svg.append("circle")
        .attr('id', 'my_cirCement')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'purple')
        .style('stroke-width', '1');

    svg.append("circle")
        .attr('id', 'my_cirFlar')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'olive')
        .style('stroke-width', '1');

    svg.append("circle")
        .attr('id', 'my_cirGas')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'green')
        .style('stroke-width', '1');

    svg.append("circle")
        .attr('id', 'my_cirOther')
        .attr('cx', 40)
        .attr('cy', 20)
        .attr('r', 10)
        .style('fill', 'magenta')
        .style('stroke-width', '1');


        d3.select("body")
        .append("div")
        .attr('id', 'causeofdeathtooltip')
        .style("top", 280 + "px")
        .style("left", 750 + "px")
        .style('opacity',0)
        .attr("class", "fixedDiv")
        .html("<p>Air pollution is the leading cause of death in developing countries</p><img src='./images/april_ambient_air_pollution.jpg'></img>");



    d3.selectAll('circle').on('mouseover', function(){showbox(this)})
    d3.selectAll('circle').on('mouseout', function(){hidebox(this)})


    function showbox(element)
    {
        var msg;
        if(element.id == "my_cirCoal")
            msg = "The coal has been a primary source of fuel since 1750. It's still used to date for power generation."
        else if(element.id == "my_cirOil")
            msg = "Since its discovery in 1875. From then petroleum has been used to gernerate energy and primary fuel for auto."
        else if (element.id == "my_cirCement")
            msg = "The cement industry is one of the main producers of carbon dioxide. During 1900 we started realising its effect on air pollution."
        else if (element.id == "my_cirGas")
            msg = "Natuaral Gas has been used to light the streets in 1836 in Britain. Today it's used in industrial, power gereration and domestic use."
        else if (element.id == "my_cirFlar")
            msg = "Flares emit a host of air pollutants, depending on the hemical composition of the gas being burnt. Flaring results in hydrogen sulfide emissions."
        else if (element.id == "my_cirOther")
            msg = "Other causeses air pollution includes wildfires, chemicals burning of garbage waste,agricultural activities,chemical/synthetic products, etc. "

            d3.select("#causeofdeathtooltip")
            .style("opacity", "1")
            .style("top", (event.pageY) + 30 + "px").style("left", (event.pageX) + "px")
            .html(msg);
    }
    
    function hidebox(element)
    {
        d3.select("#causeofdeathtooltip")
        .style("opacity", "0")
    }



    //let arrYears = new Array ();

    let arrOilEmission = new Array();
    var OilEmissionStart = { date: 1972, value: 0 };

    let arrFlarEmission = new Array();
    var FlasEmissionStart = { date: 1972, value: 0 };

    let arrCementEmission = new Array();
    var CementEmissionStart = { date: 1972, value: 0 };

    let arrCoalEmission = new Array();
    var CoalEmissionStart = { date: 1972, value: 0 };

    let arrGasEmission = new Array();
    var GasEmissionStart = { date: 1972, value: 0 };

    let arrOtherEmission = new Array();
    var OtherEmissionStart = { date: 1972, value: 0 };

    d3.csv("./data/co2-emissions-by-fuel-line.csv",
        function (consdata) {
            if (consdata["Entity"] == "World") {
                var dtOil = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from oil'] };
                arrOilEmission.push(dtOil);
                if (OilEmissionStart.value == 0 && dtOil.value > 0) {
                    OilEmissionStart = dtOil;
                }

                var dtFlar = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from flaring'] };
                arrFlarEmission.push(dtFlar);
                if (FlasEmissionStart.value == 0 && dtFlar.value > 0) {
                    FlasEmissionStart = dtFlar;
                }

                var dtCement = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from cement'] };
                arrCementEmission.push(dtCement);
                if (CementEmissionStart.value == 0 && dtCement.value > 0) {
                    CementEmissionStart = dtCement;
                }

                var dtCoal = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from coal'] };
                arrCoalEmission.push(dtCoal);
                if (CoalEmissionStart.value == 0 && dtCoal.value > 0) {
                    CoalEmissionStart = dtCoal;
                }

                var dtGas = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from gas'] };
                arrGasEmission.push(dtGas);
                if (GasEmissionStart.value == 0 && dtGas.value > 0) {
                    GasEmissionStart = dtGas;
                }

                var dtOther = { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from other industry'] };
                arrOtherEmission.push(dtOther);
                if (OtherEmissionStart.value == 0 && dtOther.value > 0) {
                    OtherEmissionStart = dtOther;
                }

                return { date: d3.timeParse("%Y")(consdata.Year), value: consdata['CO2 emissions from oil'] }
            }
        },

        function (data) {

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) { return d.date; }))
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-65)");;

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) { return +d.value; })])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y).tickFormat(d3.format('.0f')));

            svg.append("path")
                .attr('id', 'oilline')
                .datum(arrOilEmission)
                .attr("fill", "none")
                .attr("stroke", "pink")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (OilEmissionStart.date == d.date) d3.select('#my_cirOil').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )

            svg.append("path")
                .attr('id', 'coalline')
                .datum(arrCoalEmission)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (CoalEmissionStart.date == d.date) d3.select('#my_cirCoal').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )


            svg.append("path")
                .attr('id', 'cementline')
                .datum(arrCementEmission)
                .attr("fill", "none")
                .attr("stroke", "purple")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (CementEmissionStart.date == d.date) d3.select('#my_cirCement').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )


            svg.append("path")
                .attr('id', 'flarline')
                .datum(arrFlarEmission)
                .attr("fill", "none")
                .attr("stroke", "olive")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (FlasEmissionStart.date == d.date) d3.select('#my_cirFlar').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )

            svg.append("path")
                .attr('id', 'gasline')
                .datum(arrGasEmission)
                .attr("fill", "none")
                .attr("stroke", "green")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (GasEmissionStart.date == d.date) d3.select('#my_cirGas').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )

            svg.append("path")
                .attr('id', 'otherline')
                .datum(arrOtherEmission)
                .attr("fill", "none")
                .attr("stroke", "magenta")
                .attr("stroke-width", 2.5)
                .attr("d", d3.line()
                    .x(function (d) { if (OtherEmissionStart.date == d.date) d3.select('#my_cirOther').transition().duration(2000).attr('cx', x(d.date)).attr('cy', height - y(d.value)); return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )
        
        
        
                svg.append('text')
                .style('font-size' , '15')
                .style('visibility', 'visible')
                .attr('x',margin.left + 10)
                .attr('y', height + 45)
                .text("Time Through History in Year")
    
                svg.append('text')
                .style('font-size' , '15')
                .style('visibility', 'visible')
                .attr('x',80)
                .attr('y', 80)
                .text("Tonnes")
                .attr('transform', 'rotate(90)')        
        
        
        
        
            });

    DrawCoalToolTip(260, 10);
    DrawOilToolTip(260, 40);
    DrawGasToolTip(260, 70);
    CementToolTip(260, 100);
    FlareToolTip(260, 130);
    OtherToolTip(260, 160);


}

