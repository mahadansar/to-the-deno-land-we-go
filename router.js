import { Router } from "https://deno.land/x/oak/mod.ts";

import getTodos from "./controllers/todos/get.js";
import postTodos from "./controllers/todos/post.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello";
});

router.get("/todos", getTodos).post("/todos", postTodos);

export default router;
