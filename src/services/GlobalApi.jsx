import axios from "axios"

const key = "15848c891d594cb09a41977bef3f0682"
const axiosCreate = axios.create({
	baseURL:'https://api.rawg.io/api'
})
const getGenerList = axiosCreate.get(`/genres?key=${key}`)
const getGameList = axiosCreate.get(`/games?key=${key}`)
const searchGameList = (query) => axiosCreate.get(`/games?key=${key}&search=${query}`);
const detailsOfGames = (id) => axiosCreate.get(`/games/${id}?key=${key}`);



export default{
	getGenerList,
	getGameList,
	searchGameList,
	detailsOfGames
}