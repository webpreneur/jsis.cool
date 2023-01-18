docker run \
    --restart always \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=/db/data:/data \
    --volume=/db/logs:/logs \
    neo4j:5.3.0

# This binds two ports (7474 and 7687) for HTTP and Bolt access to the Neo4j API. 
# A volume is bound to /data to allow the database to be persisted outside the container.
# By default, this requires you to login with neo4j/neo4j and change the password. 
# You can, for development purposes, disable authentication by passing --env=NEO4J_AUTH=none to docker run.