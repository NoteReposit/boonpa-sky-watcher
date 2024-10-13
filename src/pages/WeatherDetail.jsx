import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { WeatherToday } from "../datas/WeatherToday";

const WeatherDetail = () => {
  const { id } = useParams();
  const station = WeatherToday[0].Stations.Station[id];

  // ถ้าไม่พบสถานี ให้เปลี่ยนเส้นทางไปหน้า ErrorPage
  if (!station) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="container mx-auto px-20 ms:px-20 md:px-20 lg:px-20 pt-8">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          สถานี {station.StationNameThai}
        </h2>
        <p className="text-lg mb-6 text-center">จังหวัด: {station.Province}</p>
        
        {/* Grid layout สำหรับการแสดงข้อมูล */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ความกดอากาศที่ระดับน้ำทะเล: {station.Observation.MeanSeaLevelPressure} hPa</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">อุณหภูมิ: {station.Observation.Temperature}°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">อุณหภูมิสูงสุด: {station.Observation.MaxTemperature}°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ต่างจากอุณหภูมิสูงสุด: {station.Observation.DifferentFromMaxTemperature}°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">อุณหภูมิต่ำสุด: {station.Observation.MinTemperature}°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ต่างจากอุณหภูมิต่ำสุด: {station.Observation.DifferentFromMinTemperature}°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ความชื้นสัมพัทธ์: {station.Observation.RelativeHumidity}%</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ทิศทางลม: {station.Observation.WindDirection}°</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ความเร็วลม: {station.Observation.WindSpeed} km/h</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">ปริมาณน้ำฝน: {station.Observation.Rainfall} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;