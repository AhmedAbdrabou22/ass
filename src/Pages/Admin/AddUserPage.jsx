import AddUsers from '../../components/AddUsers'
import SidbarAdmin from '../../components/ٍSidbar/SidbarAdmin'

function AddUserPage() {
  return (
    <div className="col-11 m-auto d-flex justify-content-between">


    <div className="col-3 d-none d-lg-block">
     <SidbarAdmin/>
    </div>



   <div className="col-12 col-lg-9  py-4">
     <AddUsers/>
   </div>

   </div>
)

}

export default AddUserPage