import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import '../styles/MainRoute.css';
import { checkToken } from '../utils/token';
import { navigate } from "@reach/router"

export default function MainRoute() {
    // the set timeout is only used to give a feeling that the site is loading
    // the token is found in the browser's memory but since it can be fetched instantly hence it doesn't provide a good user experience
    useEffect(() => {
        if(!checkToken()){
            setTimeout(() => {
                navigate('/signin');
            }, 3000)
        }
        else {
            setTimeout(() => {
                navigate('/myaccount')
            }, 3000);
        }
    },[]);

    return (
        <div className="MainRoute-div">
            <Loader />
        </div>
    )
}
