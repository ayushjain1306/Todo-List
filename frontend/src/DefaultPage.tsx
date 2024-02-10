import React, { useState, useEffect } from "react";
import Account from "./Components/account/Account";
import Home from "./Components/home/Home";
// import Loader from "./Loader";

const DefaultPage = () => {
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        const tokenExists = isTokenExists();

        if (tokenExists){
            const tokenExpired = isTokenExpired();

            if (!tokenExpired){
                setAuthenticate(true);
            }
            else {
                setAuthenticate(false);
                localStorage.removeItem("token");
            }
        }
        else {
            setAuthenticate(false);
        }
    }, []);

    const isTokenExists = () => {
        const token: any = localStorage.getItem("token");

        if (token){
            return true;
        }

        return false;
    }

    const isTokenExpired = () => {
        try {
            const token: any = localStorage.getItem("token");

            const [header, payload, signature] = token.split(".");

            const decodedPayload: any = JSON.parse(atob(payload));

            if (header && signature && decodedPayload && decodedPayload.exp){
                const currentTime = Math.floor(Date.now()/1000);
                const expiryTime = decodedPayload.exp;

                if (expiryTime > currentTime){
                    return false;
                }
                else {
                    return true;
                }
            }

            return true;
        }
        catch (error: any){
            console.log(error);
        }
        
    }

    return (
        <>
            {/* <Loader /> */}

            {
                authenticate ? <Home /> : <Account />
            }
        </>
    )
}

export default DefaultPage;