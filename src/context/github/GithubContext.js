import { useReducer, createContext } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        userRepos: [],
        loading: false
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);


    // get initial users (testing purpose)
    const fetchUsers = async () => {
        dispatch({ type: 'SET_LOADING' });
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
        dispatch({ type: 'SET_LOADING' });
        // https://api.github.com/search/users?q=drumil
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`);
        const { items } = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const fetchUserDetails = async (userName) => {
        dispatch({ type: 'SET_LOADING' });
        // https://api.github.com/users/drumil32
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${userName}`);
        if (response.status === 404) {
            console.log('here');
        } else {
            const data = await response.json();
            console.log(data);
            dispatch({
                type: 'GET_USER',
                payload: data
            });
        }
    }

    const getUserRepos = async (userName) => {
        dispatch({ type: 'SET_LOADING' });
        const params = new URLSearchParams({
            sort:'created',
            per_page:10,
        })
        // https://api.github.com/users/drumil32/repos
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${userName}/repos?${params}`);
        if( response.status===404 ){
            console.log('here');
        }else{
            const data = await response.json();
            console.log(data);
            dispatch({
                type : 'GET_REPOS',
                payload : data
            });
        }
    }

    const clearSearchData = () => dispatch({ type: 'CLEAR_USERS' });

    const clearUserDetailsAndRepos = () => { console.log("it is called"); dispatch({ type: 'CLEAR_USERS_AND_REPOS' }) };

    return (
        <GithubContext.Provider value=
            {{
                users: state.users,
                user: state.user,
                loading: state.loading,
                userRepos : state.userRepos,
                fetchUsers,
                clearSearchData,
                fetchSearchResult,
                fetchUserDetails,
                clearUserDetailsAndRepos,
                getUserRepos
            }} >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;