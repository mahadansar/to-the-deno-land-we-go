import { Router } from "https://deno.land/x/oak/mod.ts";

import getTodos from "./controllers/todos/get.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Hello";
});

router.get("/todos", getTodos);

export default router;
