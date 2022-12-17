
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
        case 'GET_USER' :
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        case 'CLEAR_USERS_AND_REPOS' :
            return {
                ...state,
                user : {},
                repos : []
            }
        case 'GET_REPOS' :
            return{
                ...state,
                userRepos : action.payload,
                loading : false
            }
        default:
            return state;
    }
}

export default GithubReducer;