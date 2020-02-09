import React, { useEffect } from 'react'
import '../styles/ActionRequiredSection.css';
import AcceptOrDeclineBox from './AcceptOrDeclineBox';
import { fetchDeclined } from '../redux/actions/fetchDeclined';
import { useSelector } from 'react-redux';

export default function DeclineSection() {

    useEffect(() => {
        fetchDeclined()
    },[]);

    const declineData = useSelector(state => state.declined.data);

    return (
        <div>
        { 
            declineData && declineData.map(item => {
                return <AcceptOrDeclineBox key={item._id} name={item.to} price={item.price} status="DECLINE" time={item.timestamp} />
            })
        }
        {
            declineData && declineData.length === 0 ? <p>there are no declined negotiations</p> : null
        }
        </div>
    )
}
