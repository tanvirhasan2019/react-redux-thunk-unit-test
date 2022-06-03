import axios from 'axios';
import React, { useEffect } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Paper from "@mui/material/Paper"

import { FETCH_USERS } from "../helper/contansts"

export default function UserList() {
    const [users, setUsers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(FETCH_USERS);
                setUsers(response.data)
                console.log("users data : ", response.data)
                setLoading(false)
            } catch (error) {
                setError(error.response.data)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h3>Fetched data</h3>
            {loading && <p>loading</p>}
            {error && <p>{error}</p>}
            {!loading && !error && users?.map((item, index) =>
                <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: '#1564b1' }} elevation={6} component={Paper}>
                                <PersonOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${item?.name}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {item?.username}
                                    </Typography>
                                    {`-${item?.address?.street}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            )
            }
        </div>
    )
}
