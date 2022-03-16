# BreadFristSearch
-   create visited queque
-   call auxiliarBFS with the node
-   return visited queque

## AuxiliadBFS
-   push node in the visited queque
-   create searchQueque
-   push node to search queque
-   while searchQueque not empty
    -   tempNode = shift queque
    -   adjacentes = getAdjacentes of the tempNode
    -   for every adjacent_node
        -   if is not in visited nodes
            -   push adjacent_node to searchQueque
            -   push adjacent_node to visited