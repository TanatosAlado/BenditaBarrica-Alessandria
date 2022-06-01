import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NewtonsCradle } from '@uiball/loaders'
import './Spinner.css'



function cargando ()  {

  return (
    
    <NewtonsCradle 
      size={80}
      speed={1.4} 
      color="white" 
    />
    
  )
  
}

export default cargando
