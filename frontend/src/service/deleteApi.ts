import axios from 'axios';

const URL = "https://todo-list-nu-green.vercel.app";

async function deleteApi(data: Object, valid: boolean) {
    const loader = document.getElementById("loader");

    try {
        if (loader) loader.style.display = "block";

        await axios.delete(`${URL}/activity`, data);

        if (loader) loader.style.display = "none";

        if (valid) alert("Activity deleted successfully.");

        window.location.reload();
    }
    catch (error){
        if (loader) loader.style.display = "none";
        console.log(error);
    }
}

export default deleteApi;