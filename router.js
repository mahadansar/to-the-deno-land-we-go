import { Router } from "https://deno.land/x/oak/mod.ts";

import getTodos from "./controllers/todos/get.js";
import postTodos from "./controllers/todos/post.js";
import deleteTodo from "./controllers/todos/delete.js";
import putTodo from "./controllers/todos/put.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello";
});

router
  .get("/todos", getTodos)
  .post("/todos", postTodos)
  .delete("/todos/:id", deleteTodo)
  .put("/todos/:id", putTodo);

export default router;
