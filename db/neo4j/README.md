# General neo4j

## Learning

### GraphAcademy

[Neo4j Fundamentals](https://graphacademy.neo4j.com/courses/neo4j-fundamentals)

## Docker

[neo4j - Docs - Docker](https://neo4j.com/docs/operations-manual/current/docker/)

[Persisting data using Volumes](https://neo4j.com/docs/operations-manual/current/docker/introduction/#docker-volumes)

```sh
docker run \
    --restart always \
    --publish=7474:7474 --publish=7687:7687 \
    --env NEO4J_AUTH=neo4j/your_password \
    --volume=/path/to/your/data:/data \
    --volume=/path/to/your/logs:/logs \
    neo4j:5.3.0
```