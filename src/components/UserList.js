import axios from 'axios';
import React, { useEffect } from 'react'

export default function UserList() {
    const [users, setUsers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data)
                setLoading(false)
            } catch(error){
                setError(error.response.data)
                setLoading(false)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>loading</p>}
            {error && <p>{error}</p>}
            {!loading && !error  && users?.map((item, index) =>
                <li key={index}> User Name- {item.username}</li>)
            }
        </div>
    )
}
