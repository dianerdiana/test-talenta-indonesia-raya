import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { Button, ListGroup } from 'react-bootstrap'

const MyElement = () => (
  <View>
    <Text>This is my element!</Text>
    <Button variant="primary">Click me!</Button>
    <ListGroup>
      <ListGroup.Item>Pertama</ListGroup.Item>
      <ListGroup.Item>Kedua</ListGroup.Item>
      <ListGroup.Item>Ketiga</ListGroup.Item>
    </ListGroup>
  </View>
)

const MyPDF = () => (
  <Document>
    <Page size="A4">
      <MyElement />
    </Page>
  </Document>
)

const MyPDFDownload = () => (
  <PDFDownloadLink document={<MyPDF />} fileName="myelement.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
  </PDFDownloadLink>
)

const MyPDFPreview = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <PDFViewer style={{ height: '100%', width: '100%' }}>
        <MyPDF />
      </PDFViewer>
    </div>
  )
}

export default MyPDFPreview
