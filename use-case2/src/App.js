import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [websites, addSites] = useState(["google", "cds"])
  const [inputFeild, setinputFeild] = useState(["google", "cds"])

  const inputChange = (e) => setinputFeild(e.target.value);


  const siteAdded = (e) => {
    addSites([...websites, inputFeild])
    console.log(websites)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input className="inputcl" onChange={inputChange} placeholder="Enter Website here to be monitored" />
        <button onClick={siteAdded} className="addbutton">
          Add
        </button>

        <table>
          <tbody>
            <tr>
              <th>Website</th>
              <th>Status</th>
            </tr>
            {websites.map(v => {
              return (<tr>
                <td> <a className='links' href='#'> {v} </a> </td>
                <td><button className='successBtn' >SUCCESS</button></td>
              </tr>)
            })}

          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
