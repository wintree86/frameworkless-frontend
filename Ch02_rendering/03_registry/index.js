import getTodos from "./getTodos.js";
import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filterView from "./view/filters.js";

import registry from "./registry.js";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filterView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
