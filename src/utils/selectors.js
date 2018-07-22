const getVisibleTodos = (elements, parametr) => (
  elements.filter(element => element.title.includes(parametr))
);

export default getVisibleTodos;
