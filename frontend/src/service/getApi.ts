import axios from "axios";

const URL = "https://todo-list-nu-green.vercel.app";

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