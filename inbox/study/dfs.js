function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i += 1) {
    this.adj[i] = [];
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (let i = 0; i < this.vertices; i += 1) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices; i += 1) {
    const links = [];
    for (let j = 0; j < this.vertices; j += 1) {
      if (this.adj[i][j] !== undefined) {
        links.push(this.adj[i][j]);
      }
    }
    console.log(`${i} -> ${links.join(" ")}`);
  }
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log(`Visited vertex ${v}: ${this.adj[v].join(" ")}`);
  }

  for (let w of this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
