"use client";
import * as React from 'react';
import Head from 'next/head';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGh1dHplbGwiLCJhIjoiY2x3eTRiZmI0MWsxNzJqcHN6OW1oZGhvZiJ9.ZHoWaQzmMHi0y4YkknnfDw';

export default function MapComponent() {
  return (
    <div className="relative w-full h-80 sm:h-[500px] rounded-lg shadow-lg overflow-hidden max-w-lg border-2 border-gray-300 dark:border-gray-700">
      <Head>
        <title>Map</title>
      </Head>
      <Map
        initialViewState={{
          latitude: 33.7773732945584,
          longitude: -84.39607426503417,
          zoom: 16,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-84.39607426503417} latitude={33.7773732945584} color="red" />
      </Map>
    </div>
  );
}
