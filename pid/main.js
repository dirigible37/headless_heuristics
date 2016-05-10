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

var solver = process.argv.shift();
var curProb = process.argv.shift();
var iters = process.argv.shift();
console.log("****");
console.log(solver);
var globalTimeCap = 100;

//var param_ranges = require("param_ranges/"+solver2+"_ranges.js");

//var ranges = param_ranges.data;

var problem = require("problem.js");
var solverLoader = require("solvers/solverLoader");
var controller = require('controller');

function run(solvers) {
  controller(solvers, solver, curProb, iters);
}

solverLoader.loadSolvers(function(solvers) {
    run(solvers);
});
