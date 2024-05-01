import logo from './logo.svg';
import './App.css';

function App(){
  const arr=["Apple","Banana","Cherry","Dragonfruit"];
  const person={
    Name: "Stuti",
    Designation:"Intern",
    Age:21
  };
  const obj=Object.entries(person)
  return(
    <div className="App">
      <h1>Iterating through an array</h1>
      {arr.map((ele)=> (
     <h2>{ele}</h2>
      ))}
      <h1></h1>
      {arr.map((ele)=>{
        return(
          <div>
      <h1>{ele}</h1>
      <h2>fruit</h2>
      </div>
        );
})}
    </div>
  );
}
export default App;

