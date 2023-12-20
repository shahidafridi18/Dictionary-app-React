import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      /*<div className='text-center'>
        <img src={loading} alt='loading' />
        
      </div>*/
      <div class="text-center">
        <div class="spinner-border my-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Spinner
