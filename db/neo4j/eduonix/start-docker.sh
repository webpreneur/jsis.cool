docker run \
    --restart always \
    --publish=7474:7474 --publish=7687:7687 \
    --env NEO4J_AUTH=none \
    --volume=/db/data:/data \
    --volume=/db/logs:/logs \
    neo4j:5.3.0