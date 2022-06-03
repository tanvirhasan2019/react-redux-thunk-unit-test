import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

import { fetchUsers } from '../../redux/actions/counter.actions'

export default function FetchData() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.count)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h3>Redux fetched data</h3>
      {data.loading && <p>loading</p>}
      {data.error && <p>{data.error}</p>}
      {
        data?.users.map((item, index) =>
          <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#9c27b0' }} elevation={6} component={Paper}>
                  <MarkEmailUnreadIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${item?.email}`} secondary={`${item?.website}`} />
            </ListItem>
          </List>
        )
      }
    </div>
  )
}
