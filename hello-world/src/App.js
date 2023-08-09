import './App.css';

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

const numbers = [1, 2, 3, 4, 5];
const double_numbers = numbers.map(function(num) {
  return 2*num;
})

const title = 'React';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title) {
  return title;
}

// function component
// no parameters
// JSX - (mix of HTML and JavaScript / HTML + JavaScript)
// function is called each time the component is rendered
// like when the page is loaded for the first time
// or when the refresh button is clicked
function App() {

  // return value can be html or JSX
  return (
    <div>
      <h1>Hello, {title}</h1>
      <h1>
        {welcome.greeting}, {welcome.title}
      </h1>
      <h1>Hello, {getTitle('React')}, {double_numbers}</h1>

      <h1>My fruits</h1>

      <p>Search fruits:</p>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <p>Recreating above search using React Component</p>
      <FruitSearch />

      <hr />

      <ul>
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
      </ul>

      <p>Recreating above list using React Component</p>
      <FruitList />

    </div>
  );
}

// Components are the building blocks of React applications
// Components are foundation of every React applications
function FruitList() {
  return (
    <ul>
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
      </ul>
  );
}

function FruitSearch() {
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
