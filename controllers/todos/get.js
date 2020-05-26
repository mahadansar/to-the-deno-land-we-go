import { FILE_PATH } from "../../config.js";

export default async ({ response }) => {
  const decoder = new TextDecoder();

  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    console.log(todos);
  } catch (error) {}
};
