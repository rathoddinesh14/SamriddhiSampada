# Fruits

## React Notes

This project displays the list of fruits.
React application have component hierarchy/component trees as follows:

Uppermost entry point component(App) that spans a tree of components below it.
App is parent of FruitList(child) component and FruitSearch(child) component.

Sibling components are FruitList and FruitSearch.

Components with no children are FruitList and FruitSearch, they are known as Leaf Components.

All components can have zero, one or more children.

## Spring Boot

This project also contains the backend server that serves the list of fruits.

## TODO

- [ ] Add unit tests for React components
- [ ] Add unit tests for Spring Boot
- [ ] Add integration tests for React components
- [ ] Add integration tests for Spring Boot
- [ ] Connect to a database
- [ ] Add authentication
- [ ] Connect frontend to backend
