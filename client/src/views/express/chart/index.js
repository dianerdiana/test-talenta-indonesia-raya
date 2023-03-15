// ** React Import
import React from 'react'

// ** Third Party Component
import { Col, Row } from 'react-bootstrap'
import { ArcElement, Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

// ** Store & Redux
import { useSelector } from 'react-redux'

// ** Custom Component
import DoughnutChart from './DoughnutChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ChartComponent = () => {
  // ** Vars
  const chartData = useSelector((state) => state.express.bar)
  const { f19, f20, m19, m20 } = chartData

  const male = m19 + m20
  const female = f19 + f20

  const colors = {
    success: '#28dac6',
    teal: '#01fb34',
    gray: '#a3a5aa',
  }

  return (
    <Row>
      <Col sm="4">
        <DoughnutChart colors={colors} male={male} female={female} />
      </Col>
      <Col sm="4">
        <PieChart colors={colors} male={male} female={female} />
      </Col>
      <Col sm="4">
        <BarChart colors={colors} chartData={chartData} />
      </Col>
    </Row>
  )
}

export default ChartComponent
