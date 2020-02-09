import privateApi from '../../utils/privateApi';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';
import { fetchPending } from './fetchPending';

const createNeg = createAction("create-negotiation");

export const createNegotiation = async (to,price, alert,close) => {
    try {
    let response = await privateApi.post("/negotiation/create",{
        "to": to,
        "price": parseFloat(price)
    });
    if(response.status === 201){
        store.dispatch(createNeg(response.data))
        fetchPending()
        alert.show("negotiation created successfully");
        close()
        }
    }
    catch(err){
        console.log(err)
        alert.show("something wrong occurred, please try again later.")
    }
}