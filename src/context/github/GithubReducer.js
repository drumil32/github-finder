
const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'CLEAR_USERS':
            return {
                ...state,
                users : []
            }
        case 'GET_USER_AND_REPOS' :
            console.log('hello');
            return {
                ...state,
                user : action.payload.user,
                userRepos : action.payload.repos,
                loading : false
            }
        case 'CLEAR_USERS_AND_REPOS' :
            console.log('hello1');
            return {
                ...state,
                user : {},
                userRepos : []
            }
        default:
            return state;
    }
}

export default GithubReducer;