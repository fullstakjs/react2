
import './App.css';
import data from './data.js'
import { useState } from "react";

function App() {
  const [filter, setfilter] = useState("");
  const [display, setdisplay] = useState(data)

  const handleChange=(e)=>{
    // console.log(e.target.value);
    setfilter(e.target.value);

    const newdata=display.filter((data) => data.id.includes(filter))
    console.log(newdata)
    setdisplay(newdata)


  }
  return (
    <div className="App">
      <h1>React filter app</h1>
      <input type="text" value={filter} onChange={handleChange}/>
          <table>
            <thead>
              <tr>
              <th>id</th>
              <th>name</th>
              <th>mini amount in $.</th>
              </tr>
              
            </thead>
            
            <tbody>
      {display.map((data)=>{
        return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{ data.name } </td>
                <td>{data.min_size}</td>
              </tr>
              )
            })}
            </tbody>
          </table>
         
    </div>
  );
}

export default App;
