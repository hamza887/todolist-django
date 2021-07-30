import './App.css';


function App() {
  return (
    <div className="App">
     <h3>TO-DO List</h3>
      <div className=" todolist input-group mb-3">
  <input type="text" className="form-control" placeholder="What's for Today" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className=" btntodolist btn btn-warning " type="button">ADD to Do List</button>
  </div> 
  <li>hello from list</li>
  </div>
  </div>
  );
}

export default App;
