import React, { FC, useContext, useEffect, useState } from 'react'
import { Context } from '../../../Context/ContextWrapper';
import { IProps } from '../../../Interfaces/Conponent.interface'
import Service from '../../../Service/Service';

export const Timer: FC<IProps> = ({address}) => {

  const [iter, setIter] = useState<number>(0);
  const [localTime, setLocalTime] = useState<number>(0);
  const [timeStart, setTimeStart] = useState<string>("");
  const {phase, getPhase} = useContext(Context)

  console.log();

  useEffect(() => {
    (async() => {
      const time = await Service.systemTime();
      const timeStarte = await Service.timeStart();
      const myDate = new Date(timeStarte * 1000);
      setTimeStart(myDate.toLocaleString());
      setLocalTime(+time);
      console.log(timeStart)
    })()
  }, [phase])

  useEffect(() => {
    const internal = setInterval(() => setIter(iter + 1), 1000);
    setLocalTime(localTime + 1)
    if (localTime > 300 && localTime < 900){
      getPhase(2)
    }
    else if (localTime >= 900) {
      getPhase(3);
    }
    return () => clearInterval(internal)
  }, [iter])
  return (
    <div>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Время системы: {localTime}</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Номер фазы: {phase}</p>
      <p className='text-center' style={{ fontSize: "1.7rem" }}>Время старта системы: {timeStart}</p>
    </div>
  )
}
