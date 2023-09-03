import React, { useState } from "react";
import SearchBar from "../componets/SearchBar";
import Results from "../componets/Results";
import * as api from "../services/api";
import { searchByCountyAndVendorMerchType } from "../services/api";

const HomeView: React.FC = () => {
  const [data, setData] = useState<api.LocationResponse[]>([]);

  const [county, setCounty] = useState<string>("");
  const [vendorMerchType, setVendorMerchType] = useState<string>("");
  const [searchExecuted, setSearchExecuted] = useState<boolean>(false);

  const handleSearch = async (county: string, vendorMerchType: string) => {
    try {
      const response = await searchByCountyAndVendorMerchType(
        county,
        vendorMerchType
      );
      setData(response);
      setCounty(county);
      setVendorMerchType(vendorMerchType);
      setSearchExecuted(true); // Set searchExecuted to true here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {/* Pass county and vendorMerchType as props to Results */}
      {searchExecuted && (
        <Results
          data={data}
          county={county}
          vendorMerchType={vendorMerchType}
        />
      )}
    </div>
  );
};

export default HomeView;
