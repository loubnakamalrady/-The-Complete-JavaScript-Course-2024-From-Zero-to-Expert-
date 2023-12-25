var numNeighbours = parseInt(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  alert(`Only ${numNeighbours} border!`);
  s;
} else if (numNeighbours > 1) {
  alert("More than 1 border");
} else {
  alert("No borders");
}
