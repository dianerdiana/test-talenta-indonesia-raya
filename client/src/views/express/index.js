// ** React Import
import React, { useEffect, createRef } from 'react'

// ** Third Party Component

// ** Store & Redux
import { getAllData } from '../store/express'
import { useDispatch } from 'react-redux'

// ** Custom Component
import Chart from './chart'
import List from './table'

const UserList = () => {
  // ** Vars
  const dispatch = useDispatch()
  const targetRef = createRef()

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  return (
    <section className="container py-5" ref={targetRef}>
      <div className="card-chart mb-5">
        <Chart />
      </div>
      <div className="card-table">
        <List targetRef={targetRef} />
      </div>
    </section>
  )
}

export default UserList
