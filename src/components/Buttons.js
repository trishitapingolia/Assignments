import React from 'react'

const Buttons = (props) => {
  return (
    <button className='btn btn-secondary fw-bold m-2' type='button' style={{width:"50px", height:"50px"}}>
    {props.op}
    </button>
  )
}

export default Buttons