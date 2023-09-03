import React, { useState } from 'react';
import SearchBar from '../componets/SearchBar';
import Results from '../componets/Results';
import * as api from '../services/api';

const HomeView: React.FC = () => {
    const [data, setData] = useState<api.LocationResponse[]>([]);

    const handleSearch = (county: string, vendorMerchType: string) => {
        api.searchByCountyAndVendorMerchType(county, vendorMerchType)
            .then(response => setData(response));
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Results data={data} />
        </div>
    );
};

export default HomeView;



