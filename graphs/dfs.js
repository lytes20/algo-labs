function dfs(graph) {
  const result = [];
  const visited = {};
  const vertices = Object.keys(graph.list);
  let start = null;
  if (vertices.length > 0) {
    start = vertices[0];
  }
  if (!start) {
    return;
  }
  dsfHelper(graph, start, visited, result);
  return result;
}

function dsfHelper(graph, vertex, visited, result) {
  if (graph.list[vertex].length === 0) {
    return;
  }
  visited[vertex] = true;
  result.push(vertex);
  const list = graph.list[vertex];
  for (let i = 0; i < list.length; i++) {
    const temp = list[i];
    if (!visited[temp]) {
      dsfHelper(graph, temp, visited, result);
    }
  }
}
