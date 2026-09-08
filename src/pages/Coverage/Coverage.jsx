import React, { useEffect, useState } from 'react';
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const position = [23.6850, 90.3563];


// Map zoom controller
const MapController = ({ warehouse }) => {

    const map = useMap();

    useEffect(() => {

        if (warehouse) {
            map.flyTo(
                [warehouse.latitude, warehouse.longitude],
                12,
                {
                    duration: 1.5
                }
            );
        }

    }, [warehouse, map]);

    return null;
};


const Coverage = () => {

    const warehouses = useLoaderData();

    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');

    // Filter districts
    const filteredWarehouses = warehouses.filter((warehouse) =>
        warehouse.district
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // Search button
    const handleSearch = () => {
        setSearch(searchText);
    };


    return (
        <div className="bg-white rounded-4xl p-10 my-10">

            {/* Heading */}
            <div>

                <h1 className="text-3xl font-bold text-secondary">
                    We are available in 64 districts
                </h1>

                {/* Search */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5 max-w-xl">

                    <input
                        type="text"
                        placeholder="Search district..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        className="input input-bordered w-full"
                    />

                    <button
                        onClick={handleSearch}
                        className="btn btn-primary text-secondary rounded-full px-5"
                    >
                        Search
                    </button>

                </div>

            </div>


            {/* Map */}
            <div className="h-[800px] mt-8">

                <MapContainer
                    className="h-full w-full rounded-2xl"
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    {/* Zoom to searched district */}
                    <MapController
                        warehouse={filteredWarehouses[0]}
                    />


                    {/* Markers */}
                    {
                        filteredWarehouses.map((warehouse) => (

                            <Marker
                                key={warehouse.district}
                                position={[
                                    warehouse.latitude,
                                    warehouse.longitude
                                ]}
                            >

                                <Popup>

                                    <div className="space-y-2">

                                        <h2 className="font-bold text-lg">
                                            {warehouse.district}
                                        </h2>

                                        <p>
                                            <strong>Region:</strong>{' '}
                                            {warehouse.region}
                                        </p>

                                        <p>
                                            <strong>City:</strong>{' '}
                                            {warehouse.city}
                                        </p>

                                        <p>
                                            <strong>Status:</strong>{' '}
                                            {warehouse.status}
                                        </p>

                                        <p>
                                            <strong>Covered Areas:</strong>
                                        </p>

                                        <ul className="list-disc ml-5">
                                            {
                                                warehouse.covered_area.map(
                                                    (area) => (
                                                        <li key={area}>
                                                            {area}
                                                        </li>
                                                    )
                                                )
                                            }
                                        </ul>

                                    </div>

                                </Popup>

                            </Marker>

                        ))
                    }

                </MapContainer>

            </div>

        </div>
    );
};

export default Coverage;