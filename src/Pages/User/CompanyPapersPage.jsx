import CompanyPapers from '../../components/CompanyPapers'

function CompanyPapersPage() {
  return (
    <div className="col-12 m-auto d-flex">


    <div className="col-3 d-none d-xl-block">
     <sidbar/>
    </div>



   <div className="col-12 col-xl-9 py-4">
     <CompanyPapers/>
   </div>

   </div>
)

}

export default CompanyPapersPage