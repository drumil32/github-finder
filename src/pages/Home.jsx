import React, { useEffect, useState } from 'react';
import Spinner from '../components/layout/Spinner';
import UserItem from '../components/users/UserItem';

function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                authorization: `token ${process.env.REACT_APP_GITHUB_TOEKN}`
            }
        });
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setLoading(false);
    }
    return (
        <main className="container mx-auto px-3 pb-12">
            {loading ?
                <><Spinner/></>
                : <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                        {
                            users.map((user, id) => {
                                return <UserItem key={id} user={user}/>
                            })
                        }
                </div>
            }
        </main>
    )
}

export default Home