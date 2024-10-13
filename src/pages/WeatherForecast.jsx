import React, { useState } from "react";
import { WeatherForecast7Days } from "../datas/WeatherForecast7Days";

const WeatherForecast = () => {
  // ดึงข้อมูลจังหวัดจาก WeatherForecast7Days
  const provinces = WeatherForecast7Days[0].Provinces.Province;

  // State สำหรับเก็บข้อความที่ป้อนใน search bar
  const [searchTerm, setSearchTerm] = useState("");

  // ฟังก์ชันสำหรับกรองข้อมูลจังหวัดตามชื่อจังหวัด (ProvinceNameThai)
  const filteredProvinces = provinces.filter((province) =>
    province.ProvinceNameThai.includes(searchTerm)
  );

  return (
    <div className="container mx-auto p-4 lg:px-20">
      <h1 className="text-2xl font-bold text-center mb-6">พยากรณ์อากาศ 7 วัน</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="ค้นหาชื่อจังหวัด"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 p-2 mb-6 w-full rounded"
      />

      {filteredProvinces.length > 0 ? (
        filteredProvinces.map((province, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">
              {province.ProvinceNameThai} ({province.ProvinceNameEnglish})
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm lg:text-base">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-1 sm:p-2">วันที่</th>
                    <th className="border border-gray-300 p-1 sm:p-2">อุณหภูมิสูงสุด (°C)</th>
                    <th className="border border-gray-300 p-1 sm:p-2">อุณหภูมิต่ำสุด (°C)</th>
                    <th className="border border-gray-300 p-1 sm:p-2">ความเร็วลม (กม./ชม.)</th>
                    <th className="border border-gray-300 p-1 sm:p-2">ฝน (%)</th>
                    <th className="border border-gray-300 p-1 sm:p-2">รายละเอียด</th>
                  </tr>
                </thead>
                <tbody>
                  {province.SevenDaysForecast.ForecastDate.map((date, dayIndex) => (
                    <tr key={dayIndex}>
                      <td className="border border-gray-300 p-1 sm:p-2">{date}</td>
                      <td className="border border-gray-300 p-1 sm:p-2">
                        {province.SevenDaysForecast.MaximumTemperature[dayIndex]}
                      </td>
                      <td className="border border-gray-300 p-1 sm:p-2">
                        {province.SevenDaysForecast.MinimumTemperature[dayIndex]}
                      </td>
                      <td className="border border-gray-300 p-1 sm:p-2">
                        {province.SevenDaysForecast.WindSpeed[dayIndex]}
                      </td>
                      <td className="border border-gray-300 p-1 sm:p-2">
                        {province.SevenDaysForecast.PercentRainCover[dayIndex]}
                      </td>
                      <td className="border border-gray-300 p-1 sm:p-2">
                        {province.SevenDaysForecast.DescriptionThai[dayIndex]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">ไม่พบจังหวัดที่ตรงกัน</p>
      )}
    </div>
  );
};

export default WeatherForecast;
