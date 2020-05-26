import { FILE_PATH } from "../../config.js";

export default async ({ response, request }) => {
  const decoder = new TextDecoder();
  const encoder = new TextDecoder();

  try {
    const {
      value: { title },
    } = await request.body();

    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);

    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));
  } catch (error) {
    response.status = 400;
    response.body = { status: "failed", todos: [] };
  }
};