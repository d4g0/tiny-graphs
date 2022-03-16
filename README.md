# Graph Basic Search Algorithms
Based on "Introduction to algorithms by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein"

## Graph Structure
```js
    // Adjacent List Representation of a directed Graph
    var adjacenceListGraph = {
        
        nodes : ['a', 'b', 'c', 'd'],
        
        edges : [
            /* a */[],
            /* b */[],
            /* c */[],
            /* d */[]
        ],

        // ...other graph methods
    }

```

## BreadFristSearch
-   create `visited` queque
-   call `auxiliarBFS` with the `node`
-   return `visited` queque

### AuxiliadBFS
-   push `node` in the `visited` queque
-   create `searchQueque`
-   push `node` to `searchQueque`
-   while `searchQueque` not empty
    -   `tempNode` = shift `searchQueque`
    -   `adjacentes` = getAdjacentes of the `tempNode`
    -   for every `adjacent_node`
        -   if is not in visited node
            -   push `adjacent_node` to `searchQueque`
            -   push `adjacent_node` to `visited`


## Deep First Search
-   create `visited` queque
-   for every `node` 
    -   if is not visited
        -   call `dfsVisit` with the `graph` and the `node`
-   return the visited queque

### dfsVisit
-   push the node to the `visited` queque
-   for every adjacent node
    -   if is not visited
        -   call `dfsVisit` with the `graph` and the `node`