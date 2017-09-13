var fs = require('fs');
var sfile = fs.readFileSync('2017/tp1/input1.txt').toString();
var input = sfile.split('\n');
// ----------------------------------------------------------------------------
var nb = input.shift(); /*?*/
input;
input = input.map(e => ({ x: +e.split(' ')[0], y: +e.split(' ')[1] })); /*?*/
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
var nodes = []; // node names
var edges = []; // edges weight
input.forEach((a, i) => {
    nodes.push('P' + i);
    input.forEach((b, j) => {
        if (i < j) {
            edges.push(['P' + i, 'P' + j, distance(a, b)]);
        }
    });
})
nodes;
edges;
var kruskal = (nodes, edges) => {
    var mst = []; // minimum spanning tree
    var forest = nodes.map(e => [e]); /*?*/
    var sortedEdges = edges.sort((a, b) => b[2] - a[2]); /*?*/
    while (forest.length > 1) {
        var edge = sortedEdges.pop(); // the lightest edge
        var n1 = edge[0], 
            n2 = edge[1];
        t1 = forest.filter(e => e.indexOf(n1) > -1); // forest which contains node 1
        t2 = forest.filter(e => e.indexOf(n2) > -1);
        if (JSON.stringify(t1) != JSON.stringify(t2)) {
            forest.splice(forest.indexOf(t1[0]), 1); // remove element from array
            forest.splice(forest.indexOf(t2[0]), 1);
            var union = t1[0].concat(t2[0]).filter((item, pos, arr) => arr.indexOf(item) === pos); // concat and deduplicate
            forest.push(union); // add new forest
            mst.push(edge); // add edge
        }
    }
    return mst;
}
var mintree = kruskal(nodes, edges); /*?*/
var minlength = mintree.reduce((d, e) => d += e[2], 0); /*?*/
console.log(minlength);