[DockerHub - neo4j](https://hub.docker.com/_/neo4j/)


`CREATE (ee:Person {name: 'Emil', from: 'Sweden', kloutScore: 99})`

- `CREATE` creates the node.
- `()` indicates the node.
- `ee:Person` – `ee` is the node variable and `Person` is the node label.
- `{}` contains the properties that describe the node.

`MATCH (ee:Person) WHERE ee.name = 'Emil' RETURN ee;`

- `MATCH` specifies a pattern of nodes and relationships.
- `(ee:Person)` is a single node pattern with label `Person`. It assigns matches to the variable `ee`.
- `WHERE` filters the query.
- `ee.name = 'Emil'` compares name property to the value Emil.
- `RETURN` returns particular results.

```bash
MATCH (ee:Person) WHERE ee.name = 'Emil'
CREATE (js:Person { name: 'Johan', from: 'Sweden', learn: 'surfing' }),
(ir:Person { name: 'Ian', from: 'England', title: 'author' }),
(rvb:Person { name: 'Rik', from: 'Belgium', pet: 'Orval' }),
(ally:Person { name: 'Allison', from: 'California', hobby: 'surfing' }),
(ee)-[:KNOWS {since: 2001}]->(js),(ee)-[:KNOWS {rating: 5}]->(ir),
(js)-[:KNOWS]->(ir),(js)-[:KNOWS]->(rvb),
(ir)-[:KNOWS]->(js),(ir)-[:KNOWS]->(ally),
(rvb)-[:KNOWS]->(ally)
```

The `CREATE` clause can create many nodes and relationships at once.


`MATCH (ee:Person)-[:KNOWS]-(friends)
WHERE ee.name = 'Emil' RETURN ee, friends`

- `MATCH` describes what nodes will be retrieved based upon the pattern.
- `(ee)` is the node reference that will be returned based upon the `WHERE` clause.
- `-[:KNOWS]-` matches the `KNOWS` relationships (in either direction) from `ee`.
- `(friends)` represents the nodes that are Emil's friends.
- `RETURN` returns the node, referenced here by `(ee)`, and the related `(friends)` nodes found.