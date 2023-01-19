import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create(
    {
        baseURL: GITHUB_URL,
        // headers : { authorization: `token ${GITHUB_TOKEN}` }
    }
)

export const fetchSearchResult = async (text) => {
    const response = await github.get(`/search/users?q=${text}`);
    return response.data.items;
}

export const getUserRepos = async (userName) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });
    const response = await github.get(`/users/${userName}/repos?${params}`);
    if (response.status === 404) {
        console.log('here');
    } else {
        return response.data;
    }
}

export const fetchUserDetails = async (userName) => {
    const response = await github.get(`/users/${userName}`);
    if (response.status === 404) {
        console.log('here');
    } else {
        return response.data;
    }
}

export const userDataAndRepos = async (userName) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });

    const [user, repos] = await Promise.all([
        github.get(`/users/${userName}`),
        github.get(`/users/${userName}/repos?${params}`)
    ]);

    return {user:user.data,repos:repos.data};

}