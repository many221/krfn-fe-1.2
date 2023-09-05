import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Results.css";

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
  vendorMerchType: string;
  county: string;
}

const Results: React.FC<ResultsProps> = ({ data, vendorMerchType, county }) => {
  if (data.length === 0) {
    return (
      <Container className="m-container">
        <h2>
          No results found for {vendorMerchType} in {county}
        </h2>
      </Container>
    );
  }

  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Vendor Merch Type</th>
          <th>County</th>
          <th>Access Type</th>
          <th>Spot Count</th>
          <th>Application Packet Size</th>
          <th>Total Cost</th>
          <th>Total Time (Days)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.log}</td>
            <td>{row.lat}</td>
            <td>{row.vendorMerchType}</td>
            <td>{row.county}</td>
            <td>{row.accessType}</td>
            <td>{row.spotCount}</td>
            <td>{row.applicationPacket.length}</td>
            <td>
              {row.applicationPacket.reduce((acc, curr) => acc + curr.cost, 0)}
            </td>
            <td>
              {row.applicationPacket.reduce(
                (acc, curr) => acc + curr.timeInDays,
                0
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Results;
