import { useReducer, createContext } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // get initial users (testing purpose)
    const fetchUsers = async () => {
        dispatch({type:'SET_LOADING'});
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,
            // {
            //     headers: {
            //         authorization: `token ${process.env.REACT_APP_GITHUB_TOEKN}`
            //     }
            // }
        );
        const data = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    const fetchSearchResult = async (text) => {
        // https://api.github.com/search/users?q=drumil
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`);
        const {items} = await response.json();
        dispatch({
            type : 'GET_USERS',
            payload: items
        })
    }

    return (
        <GithubContext.Provider value=
            {{
                users: state.users,
                loading: state.loading,
                fetchUsers,
                dispatch,
                fetchSearchResult
            }} >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;