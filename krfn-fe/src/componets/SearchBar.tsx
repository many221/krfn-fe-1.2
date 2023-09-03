import React, { useRef } from 'react';

const SearchBar: React.FC<{ onSearch: (county: string, vendorMerchType: string) => void }> = ({ onSearch }) => {
    const countyRef = useRef<HTMLSelectElement>(null);
    const vendorMerchTypeRef = useRef<HTMLSelectElement>(null);

    const COUNTY = ["SAN_FRANCISCO", "SAN_MATEO", "ALAMEDA", "SANTA_CLARA", "MARIN", "SONOMA", "NAPA", "CONTRA_COSTA", "SOLANO"];
    const VENDOR_MERCH_TYPE = ["DRY_GOODS", "FOOD_AND_BEVERAGES", "PRODUCE", "CRAFTS", "OTHER"];

    const handleSearchClick = () => {
        if (countyRef.current && vendorMerchTypeRef.current) {
            const county = countyRef.current.value;
            const vendorMerchType = vendorMerchTypeRef.current.value;
            onSearch(county, vendorMerchType);
        }
    };

    return (
        <div className="d-flex justify-content-center my-4">
            <div className="mx-2">
                <label htmlFor="county-select">Where do you want to sell?</label>
                <select id="county-select" className="form-select" ref={countyRef}>
                    <option value="" disabled selected>Select County</option>
                    {COUNTY.map(county => <option key={county} value={county}>{county}</option>)}
                </select>
            </div>
            <div className="mx-2">
                <label htmlFor="type-select">What do you sell?</label>
                <select id="type-select" className="form-select" ref={vendorMerchTypeRef}>
                    <option value="" disabled selected>Select Merch Type</option>
                    {VENDOR_MERCH_TYPE.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>
            <div className="mx-2">
                <button className="btn btn-primary mt-4" onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
