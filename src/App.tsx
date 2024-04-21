import { useEffect } from "react";
import "./App.css";
import RotationView from "./features/RotationView";
import {
  useGetAircraftDataQuery,
  useGetAircraftsQuery,
  useGetFlightDataQuery,
} from "./redux/api";

function App() {
  const aircraftId = "AS1001";
  const { data: aircraftData } = useGetAircraftDataQuery(aircraftId);
  const { data: flightData } = useGetFlightDataQuery(aircraftId);
  const { data: aircraftsData } = useGetAircraftsQuery();

  useEffect(() => {
    console.log(aircraftData, "data based on an aircraft");
    console.log(flightData, "flight data on an aircraft ");
    console.log(aircraftsData, "aircrafts data all");
  }, [aircraftData, flightData, aircraftsData]);

  return (
    <div className="h-screen w-screen">
      <RotationView />
    </div>
  );
}

export default App;
