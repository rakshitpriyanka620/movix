import axios from "axios";

const BASE_URL= "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjE1OTcwYTU2ODU2NjY2YTMzZjU3ZTQxY2Q2NmNlNSIsInN1YiI6IjY1MDE2NmUzZmZjOWRlMGVkZWQ0OTRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.liB3-0El9Gv5JDB3rejBn4v1WQQvpi_5ZvoDvrjR_dc";

const headers= {
    Authorization:"bearer " +
    TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params)=>{
    try {
        const {data}= await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error);
        return error;
    }
}