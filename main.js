var fs = require('fs'),
    _=require('underscore');

GLOBAL._ = _;
require('amdefine/intercept');
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
//console.log = function(){}; /* don't like spammy output */

// Remove node and filename.js
process.argv.shift();
process.argv.shift();


if(process.argv.length !== 4) {
    console.error("Required arguments: <algo1> <algo2> <numcities> <outputfile> <problem>");
    process.exit();
}

var solver1 = process.argv.shift();
var solver2 = process.argv.shift();
console.log("solver: " + solver2);
var numCities = parseInt(process.argv.shift(),10);
var curProb = process.argv.shift();
console.log("problem: " + curProb);
var globalTimeCap = 100;

var param_ranges = require("param_ranges/"+solver2+"_ranges.js");

var ranges = param_ranges.data;

var problem = require("problem.js");
var solverLoader = require("solvers/solverLoader");
var controller = require('controller');

function run(solvers) {
  controller(solvers, solver1, solver2, numCities, globalTimeCap, ranges, curProb, function(l1,l2) {
      console.info(solver1, solver2);
  });
}

solverLoader.loadSolvers(function(solvers) {
    run(solvers);
});
