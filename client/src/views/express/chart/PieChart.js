// ** Third Party Component
import { Card } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ colors, chartData }) => {
  const { teal, success, gray } = colors
  const { f19, f20, m19, m20 } = chartData
  const danger = '#dc3545'
  const warning = '#fd7e14'

  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // <-- set to false to allow setting height
    height: 185, // <-- set the height of the chart
    plugins: {
      legend: {
        position: 'bottom', // <-- Set chart label position
        labels: {
          color: gray,
          padding: 10,
        },
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const percentage = data[tooltipItem.index] + '%'
          return `${data.labels[tooltipItem.index]}: ${percentage}`
        },
      },
    },
  }

  // ** Chart data
  const data = {
    labels: ['Male age 19', 'Male age 20', 'Female age 19', 'Female age 20'],
    datasets: [
      {
        data: [m19, m20, f19, f20],
        backgroundColor: [teal, success, warning, danger],
        borderWidth: 0,
        pointStyle: 'rectRounded',
      },
    ],
  }

  return (
    <Card bg="secondary" className="shadow p-3">
      <Pie data={data} options={options} />
    </Card>
  )
}

export default PieChart
