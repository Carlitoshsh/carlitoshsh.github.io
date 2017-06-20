var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

var canvas = d3.select("canvas")
  .selectAll("canvas")
    .data(data)
  .enter().append("canvas")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

var context = canvas.node().getContext("2d");