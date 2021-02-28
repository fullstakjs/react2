
import './App.css';
import data from './data.js'
import { useState } from "react";

function App() {
  const [filter, setfilter] = useState("");
  const [display, setdisplay] = useState(data)

  const handleChange=(e)=>{
    
    setfilter(e.target.value)
    const filtered = display.filter(data=>data.name.toLowerCase().startsWith(e.target.value));

    setdisplay(filtered);

    if(e.target.value===""){
      setdisplay(data);
    }
    
    
  }
  return (
    <div className="App">
      <h1>React filter app</h1>
      <input type="text" value={filter} onChange={handleChange}/>
          <table cellSpacing={5} cellPadding={5}>
            <thead>
              <tr>
              
              <th>id</th>
              <th>name</th>
              <th>user name</th>
              <th>email</th>
              </tr>
              
            </thead>
            
            <tbody>
      {display.map((data)=>{
        return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{ data.name } </td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                
              </tr>
              )
            })}
            </tbody>
          </table>
         
    </div>
  );
}

export default App;
