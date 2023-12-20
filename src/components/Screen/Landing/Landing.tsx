import Details from "../../Navbar/Landing/Details"
import Navbar from "../../Navbar/Landing/Navbar"
import "./Landing.css"
import Back from "./desktop.png"
const Landing = () => {
  return (
    <div className="main">
        <img style={{display:"flex", height:"100vh",width:"100vw", position:"absolute", zIndex:"-1"}} src={Back}/>
        <Navbar />
        <Details />
    </div>
  )
}

export default Landing