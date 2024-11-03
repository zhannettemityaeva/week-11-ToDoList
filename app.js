const btn = document.querySelector(".addTask");
const field = document.querySelector(".field");
const listTasks = document.querySelector(".taskList");

field.addEventListener("focus", () => {
  field.placeholder = " ";
});

btn.addEventListener("click", () => {
  const positionTask = document.createElement("li");
  if (field.value.length > 0) {
    listTasks.append(positionTask);
    positionTask.textContent = field.value;
    field.value = "";
    field.placeholder = "Введите задачу";
  }
});

listTasks.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("del");
  }
});

//listTasks.addEventListener("dblclick", (event) => {
//   if (event.target.tagName === "LI") {
//       if (confirm(`Вы точно выполнили задачу ${event.target.innerText}?`) {
//           event.target.remove;
//       };)}
// });
