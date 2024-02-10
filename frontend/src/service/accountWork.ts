import axios from 'axios';

const URL:String = "http://localhost:8000";

export async function performSignup(data: any){
    try {
        await axios.post(`${URL}/signup`, data);

        alert("User account created successfully.");

        window.location.reload();
    }
    catch(error: any) {
        const index1: any = error.message.indexOf("403");
        const index2: any = error.message.indexOf("401");

        if (index1 !== -1){
            alert("Account on this email already exists.");
            return;
        }

        if (index2 !== -1){
            alert("Username already exists");
            return;
        }

        if (error.message === "Network Error"){
            alert("Check yout Network Connection");
        }
        else {
            console.log(error.message);
        }
    }
}

export async function performLogin(data: any){
    try {
        let response = await axios.post(`${URL}/login`, data);

        localStorage.setItem("token", response.data.token);

        window.location.reload();
    }
    catch (error: any){
        const index1 = error.message.indexOf("404");
        const index2 = error.message.indexOf("401");

        if (index1 !== -1){
            alert("User not found.");
            return;
        }

        if (index2 !== -1){
            alert("Incorrect password");
            return;
        }

        if (error.message === "Network Error"){
            alert("Check your network connection.");
        }
        else {
            console.log(error.message);
        }
    }
}