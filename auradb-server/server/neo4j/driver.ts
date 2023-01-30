import neo4j, { Driver } from 'neo4j-driver';
import dotenv from 'dotenv';

dotenv.config({ path: './.env'});

const uri = process.env.NEO4J_URI as string;
const user = process.env.NEO4J_USERNAME as string;
const password = process.env.NEO4J_PASSWORD as string;

// To learn more about the driver: 
// https://neo4j.com/docs/javascript-manual/current/client-applications/#js-driver-driver-object

export const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));