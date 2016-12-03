var circles = d3.select('svg')
    .selectAll("circle")
    .data([10, 20, 30, 40])
    .enter().append("circle");

circles.attr("cx", "0")
    .attr("cx", function (d) { return d * 6 - 40; })
    .attr("cy", "100")
    .attr("r", function (d) { return d; })
    .transition()
    .duration(750)
    .delay(function(d,i){return d*i;})
    .attr("r",function(d){return Math.sqrt(d);})
    .style("fill", "red");