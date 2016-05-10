#!/bin/bash
#for solver in "Ant" "Amoeba" "Bee" "Cuckoo" "Flock" "Frog" "Rat" "Wolf"
for solver in  "Genetic"
do
node main.js Genetic $solver 10 eggholder
done
