import axios from "axios";

const URL = "https://todo-list-nu-green.vercel.app";

async function updateApi(data: Object){
    const loader = document.getElementById("loader");

    try {
        if (loader) loader.style.display = "block";

        await axios.put(`${URL}/activity`, data);

        if (loader) loader.style.display = "none";

        alert("Activity updated successfully!");

        window.location.reload();
    }
    catch (error){
        console.log(error);

        if (loader) loader.style.display = "none";
    }
}

export default updateApi;