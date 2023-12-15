import { Link } from "react-router-dom"
import CardOurServices from "./CardOurServices"


function OurServesesHome() {
  const number=[1,2 ,3,4,5,6]
  return (
    <div style={{backgroundColor:"rgba(0, 98, 255, 0.19)"}}>
    <div className="container py-5">
    <h2 className="text-center  fs-1">OUR SERVICES</h2>
    <div className="d-flex justify-content-evenly flex-wrap gap-3">
    {number.map(number=>
      <CardOurServices key={number} number={number}/>
        )}

</div>
<div className="text-center mt-4">
    <Link to={'/'} className=" btn btn-primary text-center  fs-3 ">Contact Us</Link>
</div>
    </div>
    </div>
  )
}

export default OurServesesHome