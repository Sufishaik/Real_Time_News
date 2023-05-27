import React from 'react'
import loading from './loading (1).gif'

const Spinner=()=> {   //here for spinner we created another file
    return (
      <div className='text-center'>
          <img className='my-3' src={loading} alt="loading" />  
      </div>
    )
  }
export default Spinner //exporting our spinner component.