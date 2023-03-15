import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', width: '100%' }}>
      <Spinner variant="success" />
    </div>
  )
}

export default LoadingPage
