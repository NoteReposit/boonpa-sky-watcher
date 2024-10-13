import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import NavbarSimple from './components/NavbarSimple';

// pages
import WeatherList from './pages/WeatherList';
import WeatherDetail from './pages/WeatherDetail';
import WeatherForecast from './pages/WeatherForecast';
import NotFoundPage from './pages/NotFoundPage';

function AppRouter() {
    return (
        <Router>
        <NavbarSimple></NavbarSimple>
          <div className="bg-gray-200 min-h-screen">
            <Routes>
              <Route path="/" element={<WeatherList />} />
              <Route path="/station/:id" element={<WeatherDetail />} />
              <Route path="/weather-forecast" element={<WeatherForecast />} />
              <Route path="/notfound" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
    );
  }
  export default AppRouter;