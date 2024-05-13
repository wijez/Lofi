import axios from "axios"

const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "7be09a6ae9fb42f086717816cfa2e07d"
const redirectUri = "http://localhost:5173"
const scopes = ["user-library-read", "playlist-modify-private"]




export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
