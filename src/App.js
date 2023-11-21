import React from 'react'
import './App.css'
import img from'./login/image/clg.jpg'
const App = () => {
  const handle=()=>{
    alert("Welcome skcet")
  }
  return (
    <>
    <h1 className="text">Santhiya</h1>
    <p className="text">Sri Krishna College of Engineering and Technology</p>
    <p className="text">Cse (Cyber Security)</p>
    <img src={img} alt="No"></img>
    <h4 className="text">Departments</h4>
    <ol>
    <li>Cyber Security</li>
    <li>Information Technology</li>
    <li>mechanical</li>
    <li>civil</li>
    </ol>
    </>
  )
}
export default App