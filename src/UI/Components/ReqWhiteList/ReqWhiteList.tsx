import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap';
import { IProps } from '../../../Interfaces/Conponent.interface';
import Service from '../../../Service/Service';

export const ReqWhiteList: FC<IProps>  = ({address}) => {

    const reqWLHandler = async(e: any) =>{
        e.preventDefault();
        const {target} = e;
        const req = await Service.reqWhiteList(target[0].value, address)
    }
  return (
    <Form onSubmit={reqWLHandler} style={{width: "40%"}}>
      <p className='text-center' style={{fontSize: "1.7rem"}}>Запрос в вайтлист</p>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Введите имя" />
      </Form.Group>
   
      <Button variant="primary" type="submit" style={{width: "100%"}}>
        Submit
      </Button>
    </Form>
  )
}

