// ** React Import
import React from 'react'

// ** Third Party Component
import { Col, Row } from 'react-bootstrap'
import {
  ArcElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// ** Store & Redux
import { useSelector } from 'react-redux'

// ** Custom Component
import DoughnutChart from './DoughnutChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ChartComponent = () => {
  // ** Function
  const genderCount = (gender) => {
    const count = users.filter((user) => user.gender.toLowerCase() === gender)
    return count.length
  }

  // ** Vars
  const users = useSelector((state) => state.express.allData)
  const male = genderCount('male')
  const female = genderCount('female')

  const colors = {
    success: '#28dac6',
    teal: '#01fb34',
    gray: '#a3a5aa',
  }

  return (
    <Row>
      <Col sm='4'>
        <DoughnutChart colors={colors} male={male} female={female} />
      </Col>
      <Col sm='4'>
        <PieChart colors={colors} male={male} female={female} />
      </Col>
      <Col sm='4'>
        <BarChart colors={colors} male={male} female={female} />
      </Col>
    </Row>
  )
}

export default ChartComponent
