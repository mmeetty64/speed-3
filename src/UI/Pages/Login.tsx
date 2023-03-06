import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context/ContextWrapper';
import Service from '../../Service/Service';

const Login = () => {

  const {getUser} = useContext(Context);

  const navigation = useHistory()
  const userLoginHandler = async(e: any) =>{
    e.preventDefault();
    const {target} = e;
    const data = await Service.Auth(target[0].value, target[1].value, "")
    if(data){
      getUser(data);
      navigation.push('/Home');
      console.log(data)
    }
  }
  return (
    <Form onSubmit={userLoginHandler} style={{width: "40%"}}>
      <p className='text-center' style={{fontSize: "1.7rem"}}>Вход</p>
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Логин</Form.Label>
        <Form.Control type="text" placeholder="Введите логин" />
      </Form.Group>

      <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
      </Form.Group>
   
      <Button variant="primary" type="submit" style={{width: "100%"}}>
        Submit
      </Button>
    </Form>
  )
}
export default Login