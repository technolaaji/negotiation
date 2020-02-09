import privateApi from '../../utils/privateApi';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';
import { fetchPending } from './fetchPending';

const modifyNeg = createAction('modify-negotiation');

export const modifyNegotiation = async (id,price,alert,close) => {
    try{
        let response = await privateApi.post("/negotiation/modify",{
            "id": id,
            "price": parseFloat(price)
        });
        if(response.status === 201){
            store.dispatch(modifyNeg(response.data));
            fetchPending()
            alert.show("Negotiation modified successfully");
            close();
        }
    }
    catch(err){
        alert.show("something wrong occurred, please try again later.")
    }
}