import { create } from "domain";
import fs, { writeFileSync } from "fs";

const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  (response) => response.json()
);

function createJsonFile(FileName, data) {
  writeFileSync(`${FileName}.json`, JSON.stringify(data));
}
createJsonFile("todos", todos);

