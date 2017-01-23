'use strict';
// var d3 = require("d3");

var svg = d3.select("body")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .call(d3.behavior.zoom().on("zoom", function() {
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
  }))
  .append("g");

svg.append("circle")
  .attr("cx", document.body.clientWidth / 2)
  .attr("cy", document.body.clientHeight / 2)
  .attr("r", 50)
  .style("fill", "#B8DEE6");
