// ** React Import
import React, { useEffect } from 'react'

// ** Third Party Component

// ** Store & Redux
import { getAllData } from '../store/fake'
import { useDispatch } from 'react-redux'

// ** Custom Component
import Chart from './chart'
import List from './table'

const UserList = () => {
  // ** Vars
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  return (
    <section className='container py-5'>
      <div className='card-chart mb-5'>
        <Chart />
      </div>
      <div className='card-table'>
        <List />
      </div>
    </section>
  )
}

export default UserList
