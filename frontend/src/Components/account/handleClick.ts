import { performSignup, performLogin } from "../../service/accountWork";

export function handleClickSignin(inputData: Object, fieldData: any, setFieldData: any) {
    if (fieldData.name === "" || 
    fieldData.email === "" ||
    fieldData.username === "" ||
    fieldData.password === "" ){
        alert("Please fill all the input fields");
        return;
    }
    
    const loader = document.getElementById("loader");

    if (loader) loader.style.display= "block";

    performSignup(fieldData);

    if (loader) loader.style.display= "none";
}

export function handleClickLogin(inputData: Object, fieldData: any, setFieldData: any){
    if (fieldData.username === "" ||
    fieldData.password === "" ){
        alert("Please fill all the input fields");
        return;
    }

    const loader = document.getElementById("loader");

    if (loader) loader.style.display= "block";
    
    performLogin(fieldData);

    if (loader) loader.style.display= "none";
}