import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper';
import { ApplyReqWL } from '../Components/ApplyReqWL/ApplyReqWL';
import { PrivateSale } from '../Components/PrivateSale/PrivateSale';
import { PublicSale } from '../Components/PublicSale/PublicSale';
import { ReqWhiteList } from '../Components/ReqWhiteList/ReqWhiteList';
import { Timer } from '../Components/Timer/Timer';

const Home = () => {

  const { user } = useContext(Context);

  if (!user.wallet) {
    return <p className='text-center' style={{ fontSize: "1.7rem" }}>Войдите в аккаунт</p>
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Timer address={user.wallet}/>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Ваш логин: {user.login}</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Ваш баланс: {user.balance}</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Ваш адрес: {user.wallet}</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>У вас {user.seedToken} seed токенов</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>У вас {user.privToken} private токенов</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>У вас {user.publToken} public токенов</p>
      {user.inWhiteList ? <p className='text-center' style={{ fontSize: "1.7rem" }}>Вы в вайтлисте</p> : <ReqWhiteList address={user.wallet} />}
      {user.role == 2 ? <ApplyReqWL address={user.wallet} /> : undefined}
      {user.inWhiteList ? <PrivateSale address={user.wallet} /> : undefined}
      <PublicSale address={user.wallet} />
    </div>
  )
}
export default Home;
