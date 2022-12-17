import React, { useContext } from 'react';
import UserResult from '../components/users/UserResult';
import UserSearch from '../components/users/UserSearch';
import Snipper from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';

function Home() {
    const { loading } = useContext(GithubContext);
    return (
        <>
            {
                loading ?
                    <Snipper /> :
                    <>
                        <UserSearch />
                        <UserResult />
                    </>
            }
        </>
    )
}

export default Home