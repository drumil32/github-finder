import React, { useContext } from 'react';
import Spinner from '../components/layout/Spinner';
import UserResult from '../components/users/UserResult';
import UserSearch from '../components/users/UserSearch';
import GithubContext from '../context/github/GithubContext';

function Home() {

    return (
        <>
            <UserSearch />
            <UserResult />
        </>
    )
}

export default Home