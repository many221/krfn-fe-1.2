import React from 'react';

interface ApplicationPacket {
    id: number;
    name: string;
    agency: string;
    link: string;
    timeInDays: number;
    cost: number;
}

interface LocationResponse {
    id: number;
    name: string;
    log: number;
    lat: number;
    vendorMerchType: string;
    county: string;
    accessType: string;
    spotCount: number;
    applicationPacket: ApplicationPacket[];
}

interface ResultsProps {
    data: LocationResponse[];
}

const Results: React.FC<ResultsProps> = ({ data }) => {
    
    return (
        <div>
            {data.map(location => (
                <ul key={location.id} className="list-group list-group-horizontal mb-3">
                    <li className="list-group-item">{location.name}</li>
                    <li className="list-group-item">{location.county}</li>
                    <li className="list-group-item">{location.vendorMerchType}</li>
                    <li className="list-group-item">{location.accessType}</li>
                    <li className="list-group-item">{location.spotCount}</li>
                    <li className="list-group-item">Total Applications: {location.applicationPacket.length}</li>
                    <li className="list-group-item">Total Cost: ${location.applicationPacket.reduce((sum, packet) => sum + packet.cost, 0)}</li>
                    <li className="list-group-item">Total Time: {location.applicationPacket.reduce((sum, packet) => sum + packet.timeInDays, 0)} days</li>
                </ul>
            ))}
        </div>
    );
};

export default Results;

