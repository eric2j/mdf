var graph1 = {
	vertex: ["1","2","3"],
	edge: [,
	/* vertex1, vertex2, weight */
		["1", "2", 4],
		["1", "3", 7],
		["2", "3", 1]
	]
},
graph2 = {
	vertex: ["1","2","3","4","5","6"],
	edge: [,
	/* vertex1, vertex2, weight */
		["1", "2", 7],
		["1", "3", 9],
		["1", "6", 14],
		["2", "3", 10],
		["2", "4", 15],
		["3", "4", 11],
		["3", "6", 2],
		["4", "5", 6],
		["5", "6", 9]
	]
};

function dijkstra(start, graph) {
	var distance = {},
		prev = {},
		vertices = {},
		u;

	// Setup distance sentinel
	graph.vertex.forEach(function(v_i) {
		distance[v_i] = Infinity;
		prev[v_i] = null;
		vertices[v_i] = true;
	});

	distance[start] = 0;

	while (Object.keys(vertices).length > 0) {
		// Obtain a vertex whose distaance is minimum.
		u = Object.keys(vertices).reduce(function(prev, v_i) {
			return distance[prev] > distance[v_i] ? +v_i : prev;
		}, Object.keys(vertices)[0]);

		graph.edge.filter(function(edge) {
			var from = edge[0],
				to 	 = edge[1];
			return from===u || to===u;
		})
		.forEach(function(edge) {
			var to = edge[1]===u ? edge[0] : edge[1],
				dist = distance[u] + edge[2];

			if (distance[to] > dist) {
				distance[to] = dist;
				prev[to] = u;
			}
		});
		// Mark visited
		delete vertices[u];
	}
	return distance;
};

console.log(dijkstra("1", graph2));