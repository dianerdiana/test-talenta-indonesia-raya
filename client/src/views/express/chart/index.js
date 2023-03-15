// ** React Import
import React, { useState, useEffect } from 'react'

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
  const [percentages, setPercentages] = useState({ f19: 0, f20: 0, m19: 0, m20: 0 })

  // ** Vars
  const chartData = useSelector((state) => state.express.bar)
  const { f19, f20, m19, m20 } = chartData

  const calculatePercentages = () => {
    const totalPresentations = Object.values(chartData).reduce((acc, curr) => acc + curr, 0)
    const percentageData = {}

    for (let key in chartData) {
      const percentage = (chartData[key] / totalPresentations) * 100
      percentageData[key] = Math.round(percentage)
    }

    setPercentages(percentageData)
  }

  const male = m19 + m20
  const female = f19 + f20

  const colors = {
    success: '#28dac6',
    teal: '#01fb34',
    gray: '#a3a5aa',
  }

  useEffect(() => {
    calculatePercentages()
    // eslint-disable-next-line
  }, [chartData])

  return (
    <Row>
      <Col sm="4">
        <DoughnutChart colors={colors} male={male} female={female} />
      </Col>
      <Col sm="4">
        <PieChart colors={colors} chartData={percentages} />
      </Col>
      <Col sm="4">
        <BarChart colors={colors} chartData={chartData} />
      </Col>
    </Row>
  )
}

export default ChartComponent
