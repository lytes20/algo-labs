function bfs(graph) {
  const queue = [];
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
  visited[start] = true;
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    const neighbors = graph.list[current];
    for (let i = 0; i < neighbors.length; i++) {
      nei = neighbors[i];
      if (!visited[nei]) {
        visited[nei] = true;
        queue.push(nei);
      }
    }
  }
  return result;
}
