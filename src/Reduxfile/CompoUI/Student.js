import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

const Student = () => {
    const data=useSelector((state)=>state.S_Data)
    const nav=useNavigate();
  return (
    <div>
        <div>
      <h1>Student Details</h1>
      <button className =" addstudentbutton" onClick={()=>nav('/Newstudent')}>Add new Student</button>
    </div>
    <table className="three">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
        </thead>
        {data.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td>
                        <NavLink to='/Editstudent' state={{index}}>Edit</NavLink>
                    </td>
                </tr>
            )
        })}

    </table>
    </div>
  )
}

export default Student
