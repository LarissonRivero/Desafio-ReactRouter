import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto() {
  return (
    <Form className='p-3 m-3 text-center'>
        <h1>¿Como Podemos Ayudarte? </h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-3'>Correo</Form.Label>
        <Form.Control type="email" placeholder="nombre@correo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fs-3'>Descripción</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
    <Button variant="success" type="submit">
      Enviar
    </Button>
  </Form>
  )
}

export default Contacto;