import React,{useState,useContext,useReducer} from 'react';
import GithubContext from '../../context/github/GithubContext';
import GithubReducer from '../../context/github/GithubReducer'

function UserSearch() {
    const [text,setText] = useState('');
    const {users,dispatch,fetchSearchResult} = useContext(GithubContext);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if( ''===text.trim() ){
            alert('Please enter Text');
        }else{
            fetchSearchResult(text);
            setText('');
        }
    }

    const handleChange = (e)=>{ setText(e.target.value); }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}
                            />
                            <button
                                type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button
                        onClick={() => dispatch({ type: 'CLEAR_USERS' })}
                        className='btn btn-ghost btn-lg'
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserSearch