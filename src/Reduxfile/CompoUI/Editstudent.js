import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice/Slice';

// import '../sty.css'

const Editstudent = () => {
    const index=useLocation().state.index;
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.S_Data);
    const nav=useNavigate()
    const [info,setInfo]=useState({
        Name:data[index].Name,
        Age:data[index].Age,
        Course:data[index].Course,
        Batch:data[index].Batch
    })
    const handledata=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const updatedata=()=>{
        dispatch(editStudent({info,index}))
        nav('/Student')
    }
  return (
    <>
    <div className='up3'>Name</div>
    <div className='up4'>Age</div>
    <div className='up5'>Course</div>
    <div className='up6'>Batch</div>
    <div className='up2'>
        <div className='up1'>
        <input type='text' name='Name' placeholder='enter the name' onChange={handledata}/>
        <input type='Number' name='Age' placeholder='enter the age' onChange={handledata}/>
        </div>
        <div className='up1'>
        <input type='text'name='Course' placeholder='enter the course' onChange={handledata}/>
        <input type='text' name='Batch' placeholder='enter the batch' onChange={handledata}/>
        </div>
        <button className='up7 button2' onClick={()=>nav('/Student')}>Cancel</button>
        <button className='button2' onClick={updatedata}>Edit student</button>
    </div>
    </>
  )
}

export default Editstudent
