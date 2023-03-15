import mock from './mock'

const data = [
  {
    id: 1,
    fullname: 'John Doe',
    age: 24,
    gender: 'Male',
  },
  {
    id: 2,
    fullname: 'John Seesha',
    age: 20,
    gender: 'Female',
  },
]

// GET ALL DATA
mock.onGet('/fake/api/users/list').reply(200, data)
