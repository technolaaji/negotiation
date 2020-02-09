import privateApi from '../../utils/privateApi';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';
import { fetchRequired } from './fetchRequired';
import { fetchPending } from './fetchPending';

const counterNeg = createAction('counter-negotiation');

export const counterNegotiation = async (id,price,alert,close) => {
    try {
        const response = await privateApi.post("/negotiation/counter",{
            "id": id,
            "price": parseFloat(price)
        });
        if(response.status === 201){
            store.dispatch(counterNeg(response.data));
            alert.show("negotiation countered");
            fetchRequired()
            fetchPending()
            close()
        }
    }
    catch(err){
        console.log(err)
        alert.show("something wrong occurred, please try again later...")
    }
}