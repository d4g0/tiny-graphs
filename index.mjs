import { AdjacentList } from './adjList.mjs';



function testBreadFirstSearchOnGraphOfNumbers() {
    var graph = new AdjacentList();
    var testNodes = [0, 1, 2, 3, 4, 5, 6];
    testNodes.forEach(node => graph.addNode(node));
    graph.connect(0, 2);
    graph.connect(0, 3);
    graph.connect(0, 6);
    graph.connect(2, 3);
    graph.connect(2, 0);
    graph.connect(2, 5);
    graph.connect(6, 1);
    graph.connect(6, 0);
    graph.connect(3, 1);
    graph.connect(3, 5);
    // graph.connect(4, 0);
    graph.connect(5, 3);
    graph.connect(1, 6);
    graph.connect(1, 2);



    var acumulator = [];

    graph.nodes.forEach((node, index) => {
        acumulator.push({
            node,
            edges: graph.edges[index],
        })
    })

    console.table(acumulator);
    console.log({ 'bfsTree(1)': graph.breadFirstSearch(1) })
}

function testBreadFirstSearchOnGraphOfLetters() {
    var graph = new AdjacentList();
    var r = 'r', s = 's', w = 'w', t = 't', x = 'x';
    var testNodes = [r, s, w, t, x];
    testNodes.forEach(node => graph.addNode(node));
    graph.connect(s, r);
    graph.connect(s, w);
    graph.connect(w, t);
    graph.connect(w, x);



    var acumulator = [];
    graph.nodes.forEach((node, index) => {
        acumulator.push({
            node,
            edges: graph.edges[index],
        })
    })

    console.table(acumulator);
    console.log('bfsTree of [s] is: ' + graph.breadFirstSearch(s))
}


function testDeepFirstSearchOnGraphOfLetters() {
    var graph = new AdjacentList();
    var u = 'u', v = 'v', w = 'w', x = 'x', y = 'y', z = 'z';
    var testNodes = [u, v, w, x, y, z];
    testNodes.forEach(node => graph.addNode(node));
    graph.connect(u, v);
    graph.connect(v, y);
    graph.connect(y, x);
    graph.connect(w, z);




    var acumulator = [];
    graph.nodes.forEach((node, index) => {
        acumulator.push({
            node,
            edges: graph.edges[index],
        })
    })

    console.table(acumulator);
    console.log('dfsTree of [s] is: ' + graph.deepFirstSearch())
}

testBreadFirstSearchOnGraphOfLetters();
testDeepFirstSearchOnGraphOfLetters();