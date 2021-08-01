function CreateTrendChart() {

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 60, bottom: 60, left: 60 },
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var tooltip2 = d3.select("#my_dataviz")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")


    //Read the data
    d3.csv("./data/currenttrenddata.csv", function (data) {

        // group the data: I want to draw one line per group
        var PbData = GetPbData(data);
        var COData = GetCOData(data);
        var NO2Data = GetNO2Data(data);
        var O3Data = GetO3Data(data);
        var PM25Data = GetPM25Data(data);
        var PM10Data = GetPM10Data(data);
        var SO2Data = GetSO2Data(data);

        // Add X axis --> it is a date format
        var x = d3.scaleLinear()
            .domain(d3.extent(data, function (d) { return d.year; }))
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat(d3.format("d")))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([-85, 68])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // color palette
        var color = d3.scaleOrdinal()
            .domain([1, 7])
            .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628'])

        svg.append("path")
            .attr('id', 'pbline')
            .datum(PbData)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(1) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(1) }).on("mouseover", function () { showInfo(d._value, "Lead") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append("path")
            .attr('id', 'COline')
            .datum(COData)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(2) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(2) }).on("mouseover", function () { showInfo(d._value, "CO") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append("path")
            .attr('id', 'NO2line')
            .datum(NO2Data)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(3) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(3) }).on("mouseover", function () { showInfo(d._value, "NO2") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append("path")
            .attr('id', 'O3line')
            .datum(O3Data)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(4) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(4) }).on("mouseover", function () { showInfo(d._value, "O3") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append("path")
            .attr('id', 'PM25line')
            .datum(PM25Data)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(5) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(5) }).on("mouseover", function () { showInfo(d._value, "PM2.5") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append("path")
            .attr('id', 'PM10line')
            .datum(PM10Data)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(6) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(6) }).on("mouseover", function () { showInfo(d._value, "PM10") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )


        svg.append("path")
            .attr('id', 'SO2line')
            .datum(SO2Data)
            .attr("fill", "none")
            .attr("stroke", function (d) { return color(7) })
            .attr("stroke-width", 2.5)
            .attr("d", d3.line()
                .x(function (d) { svg.append('circle').attr('cx', x(d._year)).attr('cy', y(d._value)).attr('r', 3).style('fill', function (d) { return color(7) }).on("mouseover", function () { showInfo(d._value, "SO2") }).on("mouseout", function () { return tooltip2.style("visibility", "hidden"); }); return x(d._year) })
                .y(function (d) { return y(d._value) })
            )

        svg.append('rect').attr('id', 'rect_id1')
            .attr('x', width - 20)
            .attr('y', 20)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(1) })

        svg.append('rect').attr('id', 'rect_id2')
            .attr('x', width - 20)
            .attr('y', 50)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(2) })

        svg.append('rect').attr('id', 'rect_id3')
            .attr('x', width - 20)
            .attr('y', 80)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(3) })

        svg.append('rect').attr('id', 'rect_id4')
            .attr('x', width - 20)
            .attr('y', 110)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(4) })

        svg.append('rect').attr('id', 'rect_id5')
            .attr('x', width - 20)
            .attr('y', 140)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(5) })

        svg.append('rect').attr('id', 'rect_id6')
            .attr('x', width - 20)
            .attr('y', 170)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(6) })

        svg.append('rect').attr('id', 'rect_id7')
            .attr('x', width - 20)
            .attr('y', 200)
            .attr('height', 20)
            .attr('width', 30)
            .style('fill', function (d) { return color(7) })

        d3.selectAll('rect').on('mouseover', function () { GrowRect(this); })
        d3.selectAll('rect').on('mouseout', function () { ResetRect(this); })

        svg.append('text')
        .style('font-size' , '15')
        .style('visibility', 'visible')
        .attr('x', 150)
        .attr('y', height + 50)
        .text("Year")

        svg.append('text')
        .style('font-size' , '15')
        .style('visibility', 'visible')
        .attr('x',70)
        .attr('y', 35)
        .text("Decrease in %")
        .attr('transform', 'rotate(90)')

    })

    function GetPbData(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["Pb"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetCOData(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["CO"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetNO2Data(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["NO2"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetO3Data(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["O3"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetPM25Data(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["PM2.5"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetPM10Data(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["PM10"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function GetSO2Data(data) {
        arrKeyValue = []

        data.forEach((row) => {

            var obj = { _year: row["year"], _value: parseInt(row["SO2"]) };
            arrKeyValue.push(obj);
        });

        return arrKeyValue;
    }

    function showInfo(v, message) {

        if (message == "Lead")
            message = "Lead Conventration reduction " + v + " ug/m3. <BR> This data shows there is a 83% decrease over a period of 30 Years."
        else if (message == "CO")
            message = "Carbon Mono-Oxide Conventration reduction " + v + " ppm. <BR> This data shows there is a 81% decrease over a period of 30 Years."
        else if (message == "NO2")
            message = "Nitrogen Dioxide Conventration reduction " + v + " ppb. <BR> This data shows there is a 64% decrease over a period of 30 Years."
        else if (message == "O3")
            message = "Ozone Conventration reduction " + v + " ppm. <BR> This data shows there is a 33% decrease over a period of 30 Years."
        else if (message == "PM10")
            message = "Particulate Matter (PM10) Conventration reduction " + v + " ug/m3. <BR> This data shows there is a 26% decrease over a period of 30 Years."
        else if (message == "PM2.5")
            message = "Particulate Matter (PM2.5) Conventration reduction " + v + " ug/m3. <BR> This data shows there is a 41% decrease over a period of 30 Years."
        else if (message == "SO2")
            message = "Sulfur Dioxide Conventration reduction " + v + " ppm. <BR> This data shows there is a 94% decrease over a period of 30 Years."

        tooltip2.style("visibility", "visible");
        tooltip2.style("top", (event.pageY) + "px").style("left", (event.pageX) + "px");
        tooltip2.html(message);

    }

    function GrowRect(r) {
        d3.select("#" + r.id)
            .transition()
            .duration(1000)
            .attr('width', 60);
    }

    function ResetRect(r) {
        d3.select("#" + r.id)
            .transition()
            .duration(1000)
            .attr('width', 30);
    }
}