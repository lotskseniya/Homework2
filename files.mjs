import { writeFileSync } from "fs";
import todos from "./todos.json" assert { type: "json" };

todos.forEach((item) => {
   delete item.id;
   delete item.userId;
   delete item.completed;
})

function createNewMjsFile(FileName, data){
    writeFileSync(FileName, JSON.stringify(data))
}  
createNewMjsFile("titles.mjs", todos);