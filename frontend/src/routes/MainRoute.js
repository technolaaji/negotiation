import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import '../styles/MainRoute.css';
import { checkToken } from '../utils/token';
import { navigate } from "@reach/router"

export default function MainRoute() {

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
