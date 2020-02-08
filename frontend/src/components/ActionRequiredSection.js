import React from 'react'
import ActionRequiredBox from './ActionRequiredBox';
import '../styles/ActionRequiredSection.css';

export default function PendingSection() {
    return (
        <div className="ActionRequiredSection-div">
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
            <ActionRequiredBox name="Abed" price="30" status="ACTION_REQUIRED" />
        </div>
    )
}
