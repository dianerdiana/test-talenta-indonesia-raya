const columns = [
  {
    name: 'No.',
    sortable: true,
    maxWidth: '100px',
    selector: (row) => row.id,
  },
  {
    name: 'Name',
    sortable: true,
    selector: (row) => row.fullname,
  },
  {
    name: 'Age',
    sortable: true,
    selector: (row) => row.age,
  },
  {
    name: 'Gender',
    sortable: true,
    selector: (row) => row.gender,
  },
]

export { columns }
