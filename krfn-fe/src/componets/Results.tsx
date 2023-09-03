import React from "react";

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
  if (!data.length) {
    return (
      <p>
        Sorry, We Don't Have Any Information About Selling {vendorMerchType} in{" "}
        {county}
      </p>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>County</th>
            <th>Name</th>
            <th>Merch Type</th>
            <th>Access Type</th>
            <th>Spot Count</th>
            <th>Application Packet Size</th>
            <th>Total Cost</th>
            <th>Total Time In Days (in days)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.county}</td>
              <td>{item.name}</td>
              <td>{item.vendorMerchType}</td>
              <td>{item.accessType}</td>
              <td>{item.spotCount}</td>
              <td>{item.applicationPacket.length}</td>
              <td>
                {item.applicationPacket.reduce(
                  (acc, curr) => acc + curr.cost,
                  0
                )}
              </td>
              <td>
                {item.applicationPacket.reduce(
                  (acc, curr) => acc + curr.timeInDays,
                  0
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
