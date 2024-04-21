import AircraftView from "@/components/aircrafts/AircraftView";
import FlightView from "@/components/flights/FlightView";
import ScheduledFlightCard from "@/components/flights/ScheduledFlightCard";

const RotationView: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col p-4">
      <div className="self-center p-4 text-xl"> Date range picker</div>
      <h1 className="self-center text-xl">Rotation ABCDE</h1>

      <div className="grid grid-cols-4 gap-x-5  p-12">
        <div className="">
          <AircraftView />
        </div>
        <div className="col-span-2 rounded">
          <ScheduledFlightCard />
        </div>
        <div className="">
          <FlightView />
        </div>
      </div>
    </div>
  );
};

export default RotationView;
