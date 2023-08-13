import './App.css';
import React from 'react';

const numbers = [1, 2, 3, 4, 5];

// ****** usage of arrow function ********
// const double_numbers = numbers.map(function(num) {
//   return 2*num;
// })
const double_numbers = numbers.map( num => num*2 )

const title = 'React';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

// function getTitle(title) {
//   return title;
// }
const getTitle = (title) => title

// function component
// no parameters
// JSX - (mix of HTML and JavaScript / HTML + JavaScript)
// function is called each time the component is rendered
// like when the page is loaded for the first time
// or when the refresh button is clicked
const App = () => {

  const fruits = [
    {
      objectID: 0,
      name: 'Banana',
      taste: 'Sweet',
      shape: 'Curved',
      color: 'Yellow',
      useby: '1 week',
    },
    {
      // Orange
      objectID: 1,
      name: 'Orange',
      taste: 'Sweet',
      shape: 'Round',
      color: 'Orange',
      useby: '1 week',
    },
    {
      // Apple
      objectID: 2,
      name: 'Apple',
      taste: 'Sweet',
      shape: 'Round',
      color: 'Red',
      useby: '2 weeks',
    },
    {
      // Mango
      objectID: 3,
      name: 'Mango',
      taste: 'Sweet',
      shape: 'Round',
      color: 'Yellow',
      useby: '1 week',
    },
    {
      // Grapes
      objectID: 4,
      name: 'Grapes',
      taste: 'Sweet',
      shape: 'Round',
      color: 'Green',
      useby: '1 week',
    }
  ];

  return(
    <div>
      <h1>Hello, {title}</h1>
      <h1>
        {welcome.greeting}, {welcome.title}
      </h1>
      <h1>Hello, {getTitle('React')}, {double_numbers}</h1>

      <h1>My fruits</h1>

      <p>Search fruits:</p>

      {/* <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <p>Recreating above search using React Component</p> */}
      <FruitSearch />

      <hr />

      {/* <ul>
        {fruits.map(function(item) {
          return (
            <li key={item.objectID}>
              <span> {item.name}</span>
              <span> {item.taste}</span>
              <span> {item.shape}</span>
              <span> {item.color}</span>
              <span> {item.useby}</span>
            </li>
          );})}
      </ul> */}

      {/* <p>Recreating above list using React Component</p> */}
      <FruitList list={fruits} />

    </div>
  );
}
// Components are the building blocks of React applications
// Components are foundation of every React applications
const FruitList = (props) => (
      <ul>
        {props.list.map(ele => <Item key={ele.objectID} item={ele}/>)}
      </ul>
  )

const FruitSearch = () => {

  // below code does not work
  // let searchTerm = '';

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   searchTerm = event.target.value;
  // }

  // useState is a React Hook
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>searching for <strong>{searchTerm}</strong></p>
    </div>

  );
}

function Item(props) {
  // console.log(props);
  return (
  <li>
    <span> {props.item.name}</span>
    <span> {props.item.taste}</span>
    <span> {props.item.shape}</span>
    <span> {props.item.color}</span>
    <span> {props.item.useby}</span>
  </li>);
}

export default App;

