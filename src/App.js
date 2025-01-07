import React, { useState } from 'react';
import { MapPin, Calendar, Car } from 'lucide-react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const carIcon = new L.Icon({
  iconUrl: '/car.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const App = () => {
  const [activeTab, setActiveTab] = useState('status');
  const position = [-6.2088, 106.8456];

  const tabs = [
    'Status',
    'Tracking History',
    'Geofence',
    'Toll Declaration',
    'Live Tracking',
    'POE'
  ];

  return (
    <div className="p-4 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center p-4 rounded-lg gap-4">
        {/* 1 */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-500 text-sm font-semibold">TRACKING</div>
          <div className="ml-4 flex-1">
            <div className="text-blue-600 text-lg font-bold">B 1212 DX</div>
            <div className="text-gray-400 text-xs">CAR TELTO MC003</div>
          </div>
          <div className="text-blue-600 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M20 8h-1V7c0-2.761-2.239-5-5-5H10C7.239 2 5 4.239 5 7v1H4c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h1c.553 0 1-.447 1-1v-1h12v1c0 .553.447 1 1 1h1c1.654 0 3-1.346 3-3v-5c0-1.654-1.346-3-3-3zM7 7c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v1H7V7zm14 9c0 .551-.449 1-1 1H4c-.551 0-1-.449-1-1v-5c0-.551.449-1 1-1h16c.551 0 1 .449 1 1v5zm-6-3H9c-.553 0-1 .447-1 1s.447 1 1 1h6c.553 0 1-.447 1-1s-.447-1-1-1z" />
            </svg>
          </div>
        </div>

        {/* 2 */}
        <div className="flex justify-center ml-5">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-2 py-2 text-sm rounded-md transition-colors outline-none
            ${activeTab === tab.toLowerCase()
                    ? "bg-blue-500 text-white outline outline-2 outline-blue-500"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3 */}
        <div className="flex justify-end col-end-0">
          <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md shadow hover:bg-blue-600 transition">
            Vehicle Tracking List
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-50 text-red-600">
                <span className="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                Offline | Unplug
              </span>
              <span className="text-green-600">98% ⚡️</span>
            </div>

            <div className="space-y-4">
              <InfoRow label="Device ID" value="860896051280311" />
              <InfoRow label="Device Type" value="TELTONIKA" />
              <InfoRow label="Signal Status" value="Excellent" valueColor="text-green-600" />
              <InfoRow label="GNSS Satellite" value="Ok" valueColor="text-orange-500" />
              <InfoRow label="Temperature" value="2030-04-04 10:09:32" />
              <InfoRow label="Subscription Expired Date" value="Thu, 04 Apr 2030 17:09:32" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <h3 className="text-base font-medium">Vehicle Information</h3>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-50 text-green-600 mb-4">
              Safe Condition
            </span>
            <div className="space-y-4">
              <InfoRow label="Vehicle Type" value="SUV" />
              <InfoRow label="Power Voltage" value="0 Volt" />
              <InfoRow label="Fuel Indicator" value="Unavailable" />
              <InfoRow label="ODO Meter" value="60,023 KM" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <div className="space-y-4">
            <h3 className="font-medium">Last Location Seen</h3>

            <div className="w-full h-[520px] rounded-lg overflow-hidden relative">
              <div className="p-4 bg-white rounded-lg shadow z-10 absolute top-4 left-4">
                <div className="flex gap-2 items-start">
                  <div className="flex flex-row gap-4">
                    <div className='flex flex-row w-32 gap-4'>
                      <Calendar className="w-5 h-5 mt-1 text-gray-500" />
                      <div className="font-medium">Date & Time</div>
                    </div>
                    <div className="text-gray-600">Mon, 11 Nov 2024 19:51:30</div>
                  </div>
                </div>

                <div className="flex gap-2 items-start mt-4">

                  <div className="flex flex-row gap-4">
                    <div className='flex flex-row w-32 gap-4'>
                      <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                      <div className="font-medium">Location</div>
                    </div>
                    <div className="text-gray-600">
                      Jalan Sisingamangaraja, RW 01, Selong, Kebayoran Baru, South Jakarta, Special capital Region of Jakarta
                    </div>
                  </div>
                </div>
              </div>


              <MapContainer
                center={position}
                zoom={15}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
                zoomControl={false}

              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={carIcon}>
                  <Popup>
                    B 1212 DX
                    <br />
                    Last seen: Mon, 11 Nov 2024 19:51:30
                  </Popup>
                </Marker>
              </MapContainer>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, valueColor = "text-gray-700" }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500">{label}</span>
    <span className={valueColor}>{value}</span>
  </div>
);

export default App;