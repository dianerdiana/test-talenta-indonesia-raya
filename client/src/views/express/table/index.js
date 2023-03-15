// ** React Import
import React, { useState } from 'react'

// ** Third Party Component
import { Button, Card, Col, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown, Upload } from 'react-feather'
import ReactToPdf from 'react-to-pdf'

// ** Store & Redux
import { useSelector } from 'react-redux'

// ** Custom Component
import ModalNew from './ModalNew'

// ** table utility
import { columns } from './columns'
import './theme'

const List = ({ targetRef }) => {
  // ** State
  const [modalShow, setModalShow] = useState(false)

  const toggleModal = () => setModalShow(!modalShow)

  // ** Vars
  const store = useSelector((state) => state.express.allData)

  return (
    <Card bg="secondary" className="shadow p-3">
      <Card.Title className="text-white">User List</Card.Title>
      <Card.Body>
        <DataTable
          subHeader
          pagination
          data={store}
          columns={columns}
          theme="solarized"
          sortIcon={<ChevronDown className="ms-1" />}
          subHeaderComponent={
            <div className="w-100 me-1 ms-50 my-3">
              <Row>
                <Col sm="6"></Col>
                <Col sm="6">
                  <div className="d-flex justify-content-end">
                    <ReactToPdf targetRef={targetRef} filename="download.pdf" x={1.5} y={1.5} scale={0.69}>
                      {({ toPdf }) => (
                        <Button variant="outline-gray" className="me-3" onClick={toPdf}>
                          <Upload size={16} className="me-2" />
                          Export Pdf
                        </Button>
                      )}
                    </ReactToPdf>
                    <Button variant="success" className="fw-bold text-dark shadow-success" onClick={toggleModal}>
                      Add User
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          }
        />
      </Card.Body>

      <ModalNew show={modalShow} onHide={toggleModal} />
    </Card>
  )
}

export default List
