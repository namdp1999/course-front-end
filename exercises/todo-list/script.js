const todoList = document.querySelector("#todo-list");

// Edit Todo
const editTodo = (li) => {
  const buttonEdit = li.querySelector(".edit");
  buttonEdit.addEventListener("click", () => {
    // Thêm class is-edit
    li.classList.add("is-edit");
  });
}
// End Edit Todo

// Cancel Todo
const cancelTodo = (li) => {
  const buttonCancel = li.querySelector(".cancel");
  buttonCancel.addEventListener("click", () => {
    // Xóa class is-edit
    li.classList.remove("is-edit");

    // Reset giá trị trong ô input
    const content = li.querySelector(".content").innerHTML;
    const input = li.querySelector(".input");
    input.value = content;
  });
}
// End Cancel Todo

// Ok Todo
const okTodo = (li) => {
  const buttonOk = li.querySelector(".ok");
  buttonOk.addEventListener("click", () => {
    const input = li.querySelector(".input");
    const content = li.querySelector(".content");
  
    // Gán lại giá trị cho thẻ .content
    content.innerHTML = input.value;
  
    // Xóa class is-edit
    li.classList.remove("is-edit");
  });
}
// End Ok Todo

// Done Todo
const doneTodo = (li) => {
  const buttonDone = li.querySelector(".done");
  buttonDone.addEventListener("click", () => {
    // Xóa todo khỏi todoList
    todoList.removeChild(li);
  });
}
// End Done Todo

// Insert Todo
const insertTodo = (content) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="content">${content}</span>
    <input class="input" value="${content}" />
    <button class="edit">Edit</button>
    <button class="ok">OK</button>
    <button class="cancel">Cancel</button>
    <button class="done">Done</button>
  `;
  
  todoList.appendChild(li);
  editTodo(li);
  cancelTodo(li);
  okTodo(li);
  doneTodo(li);
}
// End Insert Todo

// Create Todo
const formCreate = document.querySelector("#form-create");
formCreate.addEventListener("submit", (e) => {
  e.preventDefault();

  // Lấy content và insert vào todoList
  const content = e.target.elements.content.value;
  insertTodo(content);

  // Reset lại ô input
  e.target.elements.content.value = "";
});
// End Create Todo