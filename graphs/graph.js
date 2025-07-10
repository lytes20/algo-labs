// Graph implementation using an adjacency list
class Graph {
  list = {};

  //
  insertVertex(vertex) {
    this.list[vertex] = [];
  }

  insertEdge(vertex1, vertex2) {
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.list[vertex1] = this.list[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.list[vertex2] = this.list[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    this.list[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.list[vertex];
  }
}

// const g = new Graph();
// g.insertVertex("Gideon");
// g.insertVertex("Mohammed");
// g.insertVertex("Moges");
// g.insertVertex("Cheik");
// g.insertEdge("Gideon", "Mohammed");
// g.insertEdge("Gideon", "Moges");
// g.insertEdge("Gideon", "Cheik");
// g.insertEdge("Mohammed", "Moges");
// g.removeVertex("Mohammed");
// console.log("g", g);

const g = new Graph();
g.insertVertex("A");
g.insertVertex("B");
g.insertVertex("C");
g.insertVertex("D");
g.insertVertex("E");
g.insertVertex("F");

g.insertEdge("A", "B");
g.insertEdge("A", "C");
g.insertEdge("B", "D");
g.insertEdge("C", "E");
g.insertEdge("D", "E");
g.insertEdge("D", "F");
g.insertEdge("E", "F");
console.log("g", g);

// dfs  Result [ 'A', 'B', 'D', 'E', 'C', 'F' ]

const result = bfs(g);
console.log("result", result);
