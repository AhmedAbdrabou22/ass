import AddBlog from '../../components/AddBlog'
import SidbarAdmin from '../../components/ٍSidbar/SidbarAdmin'

function AddBlogPage() {
  return (
    <div className="col-11 m-auto d-flex justify-content-between">


    <div className="col-3 d-none d-lg-block">
     <SidbarAdmin/>
    </div>



   <div className="col-12 col-lg-9  py-4">
     <AddBlog/>
   </div>

   </div>
)

}

export default AddBlogPage