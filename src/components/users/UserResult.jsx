import React,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext'

function UserResult() {
    const {users,loading} = useContext(GithubContext);

    return (
        <main className="container mx-auto px-3 pb-12">
            {loading ?
                <><Spinner /></>
                : <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        users.map((user, id) => {
                            return <UserItem key={id} user={user} />
                        })
                    }
                </div>
            }
        </main>
    )
}

export default UserResult