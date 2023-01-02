import postgres from "https://deno.land/x/postgresjs@v3.3.2/mod.js"

const url = Deno.env.get('POSTGRES_URI') as string;
const db = Deno.env.get('POSTGRES_DB');

console.log({ url, db });

const sql = postgres(url, {
    db,
    host: Deno.env.get('POSTGRES_HOST'),
    password: Deno.env.get('POSTGRES_PASSWORD'),
    user: Deno.env.get('POSTGRES_USER'),
});

export default sql;