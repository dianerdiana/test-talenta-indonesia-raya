// ** Third Party Component
import { Card } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ colors, male, female }) => {
  const { gray, teal, success } = colors

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
          padding: 20,
        },
      },
    },
  }

  // ** Chart data
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        labels: ['Male', 'Female'],
        data: [male, female],
        backgroundColor: [teal, success],
        borderWidth: 0,
        pointStyle: 'rectRounded',
      },
    ],
  }

  return (
    <Card bg='secondary' className='shadow p-3'>
      <Pie data={data} options={options} />
    </Card>
  )
}

export default PieChart
