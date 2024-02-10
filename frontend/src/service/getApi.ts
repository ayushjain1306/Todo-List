import axios from "axios";

const URL = "http://localhost:8000";

async function getApi(){
    try {
        const response = await axios.get(`${URL}/activity`);

        return response.data;
    }
    catch (error: any){
        console.log(error);
    }
}

export default getApi;