import React, { useEffect } from 'react'
import ActionRequiredBox from './ActionRequiredBox';
import '../styles/ActionRequiredSection.css';
import { fetchRequired } from '../redux/actions/fetchRequired';
import { useSelector } from 'react-redux';

export default function PendingSection() {

    useEffect(() => {
        fetchRequired()
    },[]);

    const requiredData = useSelector(state => state.required.data);

    return (
        <div className="ActionRequiredSection-div">
        {
            requiredData && requiredData.map(item => {
                return <ActionRequiredBox id={item._id} key={item._id} name={item.from} price={item.price} status="ACTION_REQUIRED" time={item.timestamp} />
            })
        }
        {
            requiredData && requiredData.length === 0 ? <p>there are no negotiations that need required action</p> : null
        }
        </div>
    )
}
