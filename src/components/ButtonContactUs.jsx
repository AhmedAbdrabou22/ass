import { Link } from "react-router-dom"

function ButtonContactUs() {
  return (
<section className="buttonContact">
    <div className="content d-flex justify-content-between align-items-center gap-2 flex-wrap">
        <div className="info">
            Have A Question? <br/>
            Let's Have A Talk Together
        </div>
        <div className="button">
            <Link to={'/contact'} className="btn btn-primary rounded-4 fs-2 mt-3 ">Contact US</Link>
        </div>
    </div>
</section>
  )
}

export default ButtonContactUs