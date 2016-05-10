#!/bin/bash
#for solver in "Ant" "Amoeba" "Bee" "Cuckoo" "Flock" "Frog" "Rat" "Wolf"
for solver in  "Flock"
do
node main.js Genetic $solver 50 beale
done
