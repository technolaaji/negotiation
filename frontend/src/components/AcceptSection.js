import React, { useEffect } from 'react'
import '../styles/ActionRequiredSection.css';
import AcceptOrDeclineBox from './AcceptOrDeclineBox';
import { fetchAccepted } from '../redux/actions/fetchAccepted';
import { useSelector } from 'react-redux';

export default function AcceptSection() {

    useEffect(() => {
        fetchAccepted()
    },[]);

    const acceptData = useSelector(state => state.accepted.data);

    return (
        <div className="ActionRequiredSection-div">
        {
            acceptData && acceptData.map(item => {
                return <AcceptOrDeclineBox key={item._id} name={item.to} price={item.price} status="ACCEPT" time={item.timestamp} />
            })
        }
        {
            acceptData && acceptData.length === 0 ? <p>there are no accepted negotiations</p> : null
        }
            
        </div>
    )
}
