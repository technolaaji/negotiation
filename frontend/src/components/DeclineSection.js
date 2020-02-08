import React from 'react'
import '../styles/ActionRequiredSection.css';
import AcceptOrDeclineBox from './AcceptOrDeclineBox';

export default function DeclineSection() {
    return (
        <div>
            <AcceptOrDeclineBox name="Abed" price="20" status="DECLINE" />
        </div>
    )
}
