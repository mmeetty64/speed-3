import React, { FC, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { IProps } from '../../../Interfaces/Conponent.interface';
import Service from '../../../Service/Service';

interface IReqList{
    name: string;
    wallet: string;
}

export const ApplyReqWL: FC<IProps> = ({address}) => {

  const [reqList, setReqList] = useState<IReqList[]>([])

  useEffect(() => {
    (async() => {
        const data = await Service.viewReqWL("");
        setReqList(data)
        console.log(data)
    })()
  }, [reqList]) 

  const applyReqHandler = async(id: number, answer: boolean) => {
    const apply = await Service.applyReqWL(id, answer, address)
  }

  return (
    <ListGroup as="ol" numbered>
        <p className='text-center' style={{fontSize: "1.7rem"}}>Список запросов на вступление в вайтлист</p>
      {
        reqList.map((el, idx) => (
            <>
            <ListGroup.Item as="li" key={idx}>Имя: {el.name} || Адрес: {el.wallet}</ListGroup.Item>
            <Button variant="success" onClick={() => applyReqHandler(idx, true)}>Success</Button>
            <Button variant="danger" style={{marginBottom: "1rem"}} onClick={() => applyReqHandler(idx, false)}>Danger</Button>
            </>
        ))
      }  
    </ListGroup>
  )
}
