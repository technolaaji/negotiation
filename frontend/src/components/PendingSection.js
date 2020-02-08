import React from 'react'
import PendingBox from './PendingBox'
import '../styles/PendingSection.css';

export default function PendingSection() {
    return (
        <div className="PendingSection-div">
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
            <PendingBox name="Abed" price="30" status="PENDING" />
        </div>
    )
}
