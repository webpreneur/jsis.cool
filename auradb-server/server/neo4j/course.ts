import { Driver } from "neo4j-driver";

import { CreateCourseRequest } from "../controllers/api.interfaces";
import { driver } from "./driver";

async function createFriendship (
    driver: Driver, 
    person1Name: string, 
    person2Name: string
) {
    // To learn more about sessions: https://neo4j.com/docs/javascript-manual/current/session-api/
    const session = driver.session({ database: 'neo4j' });

    try {
        // To learn more about the Cypher syntax, see: https://neo4j.com/docs/cypher-manual/current/
        // The Reference Card is also a good resource for keywords: https://neo4j.com/docs/cypher-refcard/current/

        const writeQuery = `
            MERGE (p1:Person { name: $person1Name })

            MERGE (p2:Person { name: $person2Name })

            MERGE (p1)-[:KNOWS]->(p2)

            RETURN p1, p2
        `;

        // Write transactions allow the driver to handle retries and transient errors.

        const writeResult = await session.executeWrite(tx =>
            tx.run(writeQuery, { person1Name, person2Name })
        );

        // Check the write results.

        writeResult.records.forEach(record => {

            const person1Node = record.get('p1');

            const person2Node = record.get('p2');

            console.info(`Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`);

        });
    } catch (error) {
        console.error(`Something went wrong: ${error}`);
    } finally {
        // Close down the session if you're not using it anymore.
        await session.close();
    }
}

export const createCourse = async ({
    author,
    description,
    title,
    finished,
    labels,
    lengthInMinutes,
    level,
    started,
    updated,
    uploaded,
    url
}: CreateCourseRequest) => {
    const session = driver.session({ database: 'neo4j' });
    
    try {
        const writeQuery = `
            MERGE (c:Course { author: $author })
            MERGE (a:Author { name: $author })
            MERGE (c)-[:AUTHORED_BY]->(a)
            RETURN c
        `;
    } catch (error) {
        console.error(`Something went wrong: ${error}`);
    } finally {
        await session.close();
    }
}