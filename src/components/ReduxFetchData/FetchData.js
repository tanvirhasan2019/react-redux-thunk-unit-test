import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/actions/counter.actions'
export default function FetchData() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.count);
  useEffect(()=>{
      dispatch(fetchUsers())
  }, [])

  return (
    <div>
        <h1>Redux fetch data</h1>
        {data.loading && <p>loading</p>}
        {data.error && <p>{data.error}</p>}
        {
          data?.users.map(item=>
           <li>Name : {item.name}</li>  
          )
        }
    </div>
  )
}
