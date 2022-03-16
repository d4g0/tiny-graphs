export class AdjacentList {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node = 0) {
        this.nodes.push(node);
        this.edges.push([]);
    }

    connect(nodeA, nodeB) {
        const nodeAPos = search(this.nodes, nodeA);
        const nodeBPos = search(this.nodes, nodeB);

        if (!(nodeAPos > -1 && nodeBPos > -1)) {
            throw new Error('some node dosen\'t exists')
        }
        // check if is all ready connected
        if (
            search(this.edges[nodeAPos], nodeB) > -1
        ) {
            return
        }
        // there is no connection, make one
        else {
            this.edges[nodeAPos].push(nodeB);
        }
    }

    getAdjacentes(node) {
        const nodePos = search(this.nodes, node);
        if (!(nodePos > -1)) {
            throw new error('node dosent\'t exist in current graph')
        }

        return this.edges[nodePos];
    }

    breadFirstSearch(node) {
        if (!(search(this.nodes, node) > -1)) {
            throw new Error('node dosent\'t exist in current graph')
        }

        // bf tree result oulet
        var visited = [];

        const auxBFS = (node) => {
            visited.push(node);
            var searchQueque = [];
            searchQueque.push(node);

            while (searchQueque.length > 0) {
                const tempNode = searchQueque.shift();
                const adjacentes = this.getAdjacentes(tempNode);
                // console.log('(adj-list)', tempNode, adjacentes)
                adjacentes.forEach(adjNode => {
                    if (!(search(visited, adjNode) > -1)) {
                        searchQueque.push(adjNode);
                        visited.push(adjNode);
                    }
                });

            }
        }

        auxBFS(node);

        return visited;
    }

}

function search(nodes = [0, 1], node = 0) {
    if (!(Array.isArray(nodes) && typeof node == "number" || typeof node == "string")) {
        throw new Error('incorrect types arguments');
    }
    return nodes.indexOf(node)
}


var nodes = ['a', 'b', 'c', 'd']

var edges = [

    /* a */[],
    /* b */[],
    /* c */[],
    /* d */[]
]