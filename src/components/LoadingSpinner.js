import React from 'react'
import loading from './Ajax-loader.gif'

export default function LoadingSpinner() {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  )
}
