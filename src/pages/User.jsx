import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';


function User() {
    const { fetchUserDetails, user, clearUserDetails,loading } = useContext(GithubContext);
    const params = useParams();
    console.log(user);
    console.log('from user');
    useEffect(() => {
        fetchUserDetails(params.login);

        return () => { clearUserDetails(); }
    }, []);
    return (
        <>
            {loading ? <Spinner/> :
                <div>User : {user.login}</div>
            }
        </>
    )
}

export default User