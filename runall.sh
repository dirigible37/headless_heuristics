#!/bin/bash
#for solver in  "Genetic"
for solver in "Ant" "Amoeba" "Bee" "Cuckoo" "Flock" "FlockPred" "Frog" "Rat" "Wolf"
do
	node main.js Genetic $solver 25 ackley
done
