// ** Third Party Component
import { Card } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ colors, male, female }) => {
  const { gray, teal, success } = colors
  const roundUpToTen = (num = []) => {
    const highestNum = Math.max(...num)
    return Math.ceil(highestNum / 10) * 10 + 5
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    height: 120,
    barPercentage: 0.8,
    categoryPercentage: 0.6,
    plugins: {
      legend: {
        position: 'bottom',
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
        max: roundUpToTen([male, female]),
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
    labels: ['Gender'],
    datasets: [
      {
        label: 'Male',
        data: [male],
        backgroundColor: teal,
        // barThickness: 20,
      },
      {
        label: 'Female',
        data: [female],
        backgroundColor: success,
        // barThickness: 20,
      },
    ],
  }

  return (
    <Card bg='secondary' className='shadow p-3'>
      <Bar data={data} options={options} />
    </Card>
  )
}

export default BarChart
