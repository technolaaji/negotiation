import privateApi from '../../utils/privateApi';
import { createAction } from '@reduxjs/toolkit';
import store from '../store';
import { fetchRequired } from './fetchRequired';
import { fetchAccepted } from './fetchAccepted';

const acceptNeg = createAction("accept-negotiation");

export const acceptNegotiation = async (id,alert,close) => {
    try{
        const response = await privateApi.post("http://localhost:4000/negotiation/accept",{
            "id": id
        });
        if(response.status === 201){
            store.dispatch(acceptNeg(response.data));
            alert.show("negotiation accepted");
            fetchRequired()
            fetchAccepted()
            close()
        }
    }
    catch(err){
        alert.show("something wrong occurred, please try again later.");
    }
}