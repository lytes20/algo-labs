class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  insertVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  insertEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const graph = new WeightedGraph();
graph.insertVertex("A");
graph.insertVertex("B");
graph.insertVertex("C");
graph.insertVertex("D");

graph.insertEdge("A", "B", 10);
graph.insertEdge("A", "C", 5);
graph.insertEdge("B", "C", 7);
console.log(graph);
