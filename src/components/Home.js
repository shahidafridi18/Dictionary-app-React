import React from 'react'
import Dictionary from './Dictionary'

const Home = (props) => {
  return (
    <div className='container my-5'>
      <Dictionary showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
