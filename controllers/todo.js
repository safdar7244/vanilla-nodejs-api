let toDos = [];
let id = 0;
exports.getToDos = async () => {
  return new Promise((resolve, reject) => {
    resolve(toDos);
  });
};

exports.AddToDo = (title, content) => {
  return new Promise((resolve, reject) => {
    toDos.push({ id, title, content });
    id = id + 1;
    resolve({ id, title, content });
  });
};

exports.update = (id, content, title) => {
  return new Promise((resolve, reject) => {
    let todo = toDos.find((todo) => todo.id === parseInt(id));
    todo.content = content;
    todo.title = title;
    resolve(todo);
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    toDos = toDos.filter((todo) => {
      return todo.id !== parseInt(id);
    });
    resolve("dome");
  });
};

exports.getToDo = async (id) => {
  return new Promise((resolve, reject) => {
    const a = toDos.filter((todo) => {
      return todo.id === parseInt(id);
    });
    resolve(a);
  });
};
