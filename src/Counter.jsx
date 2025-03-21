import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'


function Counter() {
    const [range, setRange] = useState(1)
    /* react hook to call a function/action inside the slice "useDispatch()"" */
    const dispatch = useDispatch()
    // hook to access store  component :useSelector()
    const count=useSelector((state)=>state.counter.value)
    console.log("range")
    console.log(range);
    ;
    
  return (
    <>
    
    <div className='d-flex align-items-center justify-ontent-center w-100 flex-column'>
        <h3 style={{fontSize:'60px'}}>{count}</h3>
        <div className='ms-4'>
            <button className='btn btn-danger' onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
            <button className='btn btn-warning ms-3' onClick={()=>dispatch(reset())}>RESET</button>
            <button className='btn btn-success ms-3' onClick={()=>dispatch(increment(Number(range)))}>INCREMENT</button>
        </div>
    </div>
   <input type="text"  className='form-control mt-3 w-100' placeholder='Enter Range'
    style={{boderColor:"blue"}} onChange={(e)=>setRange(e.target.value)}/>
</>
  )
}

export default Counter