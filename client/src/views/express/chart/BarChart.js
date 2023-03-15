// ** Third Party Component
import { Card } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ colors, chartData }) => {
  const { gray, teal, success } = colors
  const { f19, f20, m19, m20 } = chartData

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    height: 120,
    barPercentage: 0.8,
    categoryPercentage: 0.6,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: gray,
          padding: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: gray,
          borderColor: gray,
        },
        ticks: { color: gray },
      },
      y: {
        min: 0,
        grid: {
          color: gray,
          borderColor: gray,
        },
        ticks: {
          stepSize: 1,
          color: gray,
        },
      },
    },
  }

  const data = {
    labels: ['0 - 19', '20 ~ more'],
    datasets: [
      {
        label: 'Male',
        data: [m19, m20],
        backgroundColor: teal,
      },
      {
        label: 'Female',
        data: [f19, f20],
        backgroundColor: success,
      },
    ],
  }

  return (
    <Card bg="secondary" className="shadow p-3">
      <Bar data={data} options={options} />
    </Card>
  )
}

export default BarChart
