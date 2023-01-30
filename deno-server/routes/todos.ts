import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post("/todos", async (ctx) => {
  // deno-lint-ignore no-explicit-any
  const data: { value: any } = await ctx.request.body();
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: data.value.text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: "Created todo!", todo: newTodo };
});

router.put("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;
  // deno-lint-ignore no-explicit-any
  const data: { value: any } = await ctx.request.body();
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: data.value.text };
  ctx.response.body = { message: "Updated todo" };
});

router.delete("/todos/:todoId", (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: "Deleted todo" };
});

export default router;
