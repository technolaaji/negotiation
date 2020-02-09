import React, { useEffect } from 'react'
import PendingBox from './PendingBox'
import '../styles/PendingSection.css';
import { fetchPending } from '../redux/actions/fetchPending';
import { useSelector } from 'react-redux';

export default function PendingSection() {

    useEffect(() => {
        fetchPending()
    },[]);

    const pendingData = useSelector(state => state.pending.data);

    return (
        <div className="PendingSection-div">
        {
            pendingData && pendingData.map(item => {
                return <PendingBox key={item._id} name={item.to} price={item.price} time={item.timestamp} status={item.from_status} />
            })
        }
        {
            pendingData && pendingData.length === 0 ? <p>there are no pending negotiations</p> : null
        }
            
        </div>
    )
}
