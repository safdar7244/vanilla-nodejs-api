const http = require("http");
const getReqData = require("./utils/utils.js");
const toDoController = require("./controllers/todo.js");

const toDos = [];
const server = http.createServer(async (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/api/todos" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(await toDoController.getToDos()));
    res.end();
  }
  if (req.url === "/api/todos" && req.method === "POST") {
    const data = await getReqData(req);
    console.log(data);
    toDoController.AddToDo(data.title, data.content);
    res.write("Added");
    res.end();
  }
  if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    res.write(JSON.stringify(await toDoController.delete(id)));
    res.end();
  }
  if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "PATCH") {
    const id = req.url.split("/")[3];
    const data = await getReqData(req);

    res.write(
      JSON.stringify(await toDoController.update(id, data.content, data.title))
    );
    res.end();
  }

  if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];

    res.write(JSON.stringify(await toDoController.getToDo(id)));
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started!");
});
