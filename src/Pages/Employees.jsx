import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import "./Empoyee.scss"

const Employees = () => {
   const [data, setdata] = useState([])
    function dataFeatch(){
        axios.get("http://localhost:8080/posts").then(r=>setdata(r.data)).catch(err=>console.log(err))
    }
   useEffect(() => {
    dataFeatch()
   }, [])

   const deletedata=(id)=>{
    axios.delete(`http://localhost:8080/posts/${id}`).then(r=>dataFeatch()).catch(e=>console.log(e))
   }
   console.log(data);
  return (<><h1>All Employees</h1>
    <div className="container">
	 
	<div className="table">
		<div className="table-header">
        <div className="header__item"><a id="name" className="filter__link" href="#">No</a></div>
			<div className="header__item"><a id="name" className="filter__link" href="#">Name</a></div>
            <div className="header__item"><a id="name" className="filter__link" href="#">Age</a></div>
            <div className="header__item"><a id="name" className="filter__link" href="#">Designation</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Details</a></div>
			<div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">Delete</a></div>
			
		</div>
			
				{data?.map(ele=>{
                    return<>
                    <div  className="table-content">	
			<div className="table-row">	
                    <div className="table-data">{ele.id}</div>
                    <div className="table-data">{ele.name}</div>
                    <div className="table-data">{ele.Age}</div>
                    <div className="table-data">{ele.Designation}</div>
                    <Link className="table-data" to={`/empd/${ele.id}`}><button>Details</button></Link>
                    <div className="table-data"><button onClick={()=>deletedata(ele.id)}>Delete</button></div>
                    </div>
			
		</div>
                    </>
                })}
				
	</div>
</div>
</>
  )
}

export default Employees