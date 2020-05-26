import { FILE_PATH } from "../../config.js";

export default async ({ request, response }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const {
      value: { title },
    } = await request.body();

    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);

    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));

    response.status = 201;
    response.body = { status: "Success", newTodo };
  } catch (err) {
    console.log(err);
    response.status = 502;
    response.body = { status: "Failed", err };
  }
}; 
