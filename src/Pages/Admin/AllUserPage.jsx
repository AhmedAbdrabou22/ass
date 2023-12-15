import AllUsers from '../../cop/AllUsers'
import SidbarAdmin from '../../components/ٍSidbar/SidbarAdmin'

function AllUserPage() {
  return (
    <div className="col-12 m-auto d-flex">


    <div className="col-3 d-none d-xl-block">
     <SidbarAdmin/>
    </div>



   <div className="col-12 col-xl-9 py-4">
     <AllUsers/>
   </div>

   </div> 
)

}

export default AllUserPage