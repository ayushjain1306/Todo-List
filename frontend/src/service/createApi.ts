import axios from 'axios';

const URL = "https://todo-list-nu-green.vercel.app";

async function createApi(data: Object){
    const loader = document.getElementById("loader");

    try {

        if (loader) loader.style.display = "block";

        await axios.post(`${URL}/activity`, data);

        if (loader) loader.style.display = "none";

        alert("Activity added successfully!");

        window.location.reload();
    }
    catch (error: any){
        console.log(error);

        if (loader) loader.style.display = "none";
    }
}

export default createApi;