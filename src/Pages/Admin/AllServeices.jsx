import AllServicesTwo from '../../components/AllServicesTwo'
import SidbarAdmin from '../../components/ٍSidbar/SidbarAdmin'

function AllServicesAdminPage() {
  return (
    <div className="col-12 m-auto d-flex">


    <div className="col-3 d-none d-xl-block">
     <SidbarAdmin/>
    </div>



   <div className="col-12 col-xl-9 py-4">
     <AllServicesTwo/>
   </div>

   </div>
)

}

export default AllServicesAdminPage