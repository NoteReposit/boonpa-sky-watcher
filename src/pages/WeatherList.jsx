import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WeatherToday } from "../datas/WeatherToday";

const WeatherList = () => {
  // ดึงข้อมูลสถานีจาก WeatherToday
  let stations = WeatherToday[0].Stations.Station;

  // State สำหรับเก็บข้อมูลที่ป้อนใน search bar
  const [searchTerm, setSearchTerm] = useState("");

  // ฟังก์ชันสำหรับกรองข้อมูลสถานีตามชื่อสถานีหรือจังหวัด
  const filteredStations = stations.filter((station) => {
    return (
      station.StationNameThai.includes(searchTerm) ||
      station.Province.includes(searchTerm)
    );
  });

  // เรียงข้อมูลตามจังหวัด (Province)
  stations = stations.sort((a, b) => {
    if (a.Province < b.Province) return -1;
    if (a.Province > b.Province) return 1;
    return 0;
  });

  return (
    <div className="container mx-auto p-4 px-20">
      <h1 className="text-2xl font-bold text-center mb-4">รายงานสภาพอากาศ</h1>
      {/* Search bar */}
      <input
        type="text"
        placeholder="ค้นหาตามชื่อสถานีหรือจังหวัด"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 p-2 mb-6 w-full rounded"
      />

      {/* ปรับเป็น grid layout */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStations.map((station, index) => (
          <li key={index} className="bg-white shadow-md rounded-2xl p-4">
            <Link
              to={`/station/${index}`}
              className="text-black hover:text-sky-800"
            >
              สถานี: {station.StationNameThai} ({station.Province})
            </Link>
          </li>
        ))}
      </ul>

      {/* แสดงข้อความเมื่อไม่มีผลลัพธ์ */}
      {filteredStations.length === 0 && (
        <p className="text-center text-gray-500">ไม่พบสถานีหรือจังหวัดที่ตรงกัน</p>
      )}
    </div>
  );
};

export default WeatherList;