#!/bin/bash
#for solver in  "Genetic"
#for time in 'seq 1 5'
#do
#for solver in "Amoeba" "Bee" "Cuckoo" "Flock" "FlockPred" "Frog" "Genetic" "Rat" "Wolf"
for solver in "Ant"
do
	node main.js $solver pid $1
done
#done
#node main.js $1 pid 1
