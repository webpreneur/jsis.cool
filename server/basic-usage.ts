import { Application, log, logger, Router } from "./deps.ts";
import sql from './db/db.ts';


import {
    errorLog,
    warningLog,
  } from 'https://deno.land/x/colorlog/mod.ts';
    
  errorLog('Error');
  warningLog('Warning');


log.info(Deno.env.get('POSTGRES_DB'));

/* sql`CREATE TABLE IF NOT EXISTS posts (tags TEXT[], title TEXT)`.then(
    console.log
).catch(console.error); */
    

const books = new Map<string, any>();

books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world from Oak server!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  });

const app = new Application();
app.use(logger.logger);
app.use(logger.responseTime);
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8080;

try {

    await app.listen({ port })

    log.info('App is listening on port ' + port);

} catch(e) {
    errorLog(e);
}
