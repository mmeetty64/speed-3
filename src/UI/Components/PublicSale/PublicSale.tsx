import React, { FC, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { IProps } from '../../../Interfaces/Conponent.interface'
import Service from '../../../Service/Service'

export const PublicSale: FC<IProps> = ({address}) => {
    
    const [tokenPrice, setTokenPrice] = useState<number>(0)

    useEffect(() => {
        (async() => {
            const data = await Service.viewTokenPrice("");
            setTokenPrice(data)
            console.log(data)
        })()   
    }, [])

    const publSaleHandler = async(e: any) =>{
        e.preventDefault();
        const {target} = e;
        const priv = await Service.publicSale(target[0].value, address, tokenPrice)
    }
  return (
    <Form onSubmit={publSaleHandler} style={{width: "40%"}}>
      <p className='text-center' style={{fontSize: "1.7rem"}}>Покупка</p>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Количество</Form.Label>
        <Form.Control type="text" placeholder="Введите количество желаемых токенов" />
      </Form.Group>
   
      <Button variant="primary" type="submit" style={{width: "100%"}}>
        Submit
      </Button>
    </Form>
  )
}
