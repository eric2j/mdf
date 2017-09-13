var _ = require('underscore');
var fs = require('fs');
var sfile = fs.readFileSync('2017/tp1/input3.txt').toString();
var input = sfile.split('\n');
var nb = input.shift(); /*?*/
input;

var getx = e => +e.split(' ')[0];
var gety = e => +e.split(' ')[1];
var dist = (a, b) => Math.sqrt(Math.pow(gety(b) - gety(a), 2) + Math.pow(getx(b) - getx(a), 2));

var nodes = [];
var edges = [];
input.forEach((a, i) => {
    nodes.push('P' + i);
    input.forEach((b, j) => {
        if (i < j) {
            edges.push(['P' + i, 'P' + j, dist(a, b)]);
        }
    });
})
nodes;
edges;
console.log(JSON.stringify(edges));
function kruskal(nodes, edges) {
    var mst = [];
    //var forest = _.map(nodes, function (node) { return [node]; }); /*?*/
    var forest = nodes.map(e=>[e]); /*?*/
    //var sortedEdges = _.sortBy(edges, function (edge) { return -edge[2]; }); /*?*/
    var sortedEdges = edges.sort((a,b)=>b[2]-a[2]); /*?*/
    while (forest.length > 1) {
        var edge = sortedEdges.pop();
        var n1 = edge[0],
            n2 = edge[1];

        //var t1 = _.filter(forest, function (tree) {
        //    return _.include(tree, n1);
        //});
        t1 = forest.filter(e=>e.indexOf(n1)>-1);
        //var t2 = _.filter(forest, function (tree) {
        //    return _.include(tree, n2);
        //});
        t2 = forest.filter(e=>e.indexOf(n2)>-1);
        if (JSON.stringify(t1) != JSON.stringify(t2)) {
            //forest = _.without(forest, t1[0], t2[0]);
            forest.splice(forest.indexOf(t1[0]),1);
            forest.splice(forest.indexOf(t2[0]),1);
            //forest.push(_.union(t1[0], t2[0]));
            var union = t1[0].concat(t2[0]);
            union = union.filter( (item, pos) => union.indexOf(item)===pos );
            forest.push(union);
            mst.push(edge);
        }
    }
    return mst;
}
var mintree = kruskal(nodes, edges); /*?*/
var distance = mintree.reduce((d,e)=>d+=e[2],0); /*?*/
console.log(Math.round(distance*1000)/1000);
