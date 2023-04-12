import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App=()=> {

  const [table , setTable] = useState("");
  const [Unique , setUnique] = useState("");
  const [Column , setColumn] = useState("");
  const [buttonClick,setbuttonClicked] = useState(false);
  const [cityName, setCityName ]= useState(["city_name","city_name","city_name","city_name"])
  const [cityNamehelper, setCityNamehelper ]= useState(["city_name","city_name","city_name","city_name"])

  const userinput = (event,index)=>{
    setCityNamehelper(
      cityNamehelper.map(
        (s,i)=>{
          if(i==index){
            return event.target.value
          }
          else
          return s
        }
      )
    )
    console.log(cityNamehelper);
  }
  const updateClick = ()=>{
    setCityName(cityNamehelper)
  }
  const tableChange =(e) =>{
    setTable(e.target.value)
  }
  const tableUniq =(e) =>{
    setUnique(e.target.value)
  }
  const tableColumn =(e) =>{
    setColumn(e.target.value)
  }
  const buttonClicked =(e)=>{
setbuttonClicked(!buttonClick);
console.log(buttonClick);
  }
  return (
    <div className="App">
      { !buttonClick &&   <header className="App-header">
       <input value={table} onChange={tableChange}  placeholder='Table Name' />
       <input  value={Unique} onChange={tableUniq} placeholder='Unique Column' />
       <input value={Column} onChange={tableColumn}  placeholder='Column Name' />
       <button onClick={buttonClicked} >
       Manual Update
        </button> 
      </header>}

{buttonClick && 

<>
<table   className='App-header' style={{borderCollapse: "collapse"}}   >
<tbody>
<tr >
<td className='table-heading-yellow' >{table}</td>
<td className='table-heading-yellow' >{Column}</td>
<td className='table-heading-distinct' >{Unique}</td>
<td className='table-heading-UInput' >User Input</td>
</tr>
{/* "interview.geography_columns","city_name" , */}
{["che","mum","bangalore","cochin"].map((value,index)=>{
return(
  <tr>
<td>interview.geography_columns</td>
<td>{cityName[index]}</td>
<td>{value}</td>
<td> <input onChange={(event)=>userinput(event,index)} /> </td>
</tr>


)
}) }


</tbody>

<button onClick={updateClick} >
  Update
</button>
</table>

</>

}

      
    </div>
  );
}

export default App;
