import privateApi from '../../utils/privateApi';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';
import { fetchDeclined } from './fetchDeclined';
import { fetchRequired } from './fetchRequired';

const declineNeg = createAction('decline-negotiation');

export const declineNegotiation = async (id,alert,close) => {
    try {
        const response = await privateApi.post("http://localhost:4000/negotiation/decline",{
            "id": id
        });
        if(response.status === 201){
            store.dispatch(declineNeg(response.data));
            alert.show("negotiation declined");
            fetchDeclined()
            fetchRequired()
            close()
        }
    }
    catch(err){
        alert.show("something wrong occurred, please try again later.")
    }
}