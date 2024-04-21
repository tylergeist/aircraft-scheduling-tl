import { Flight } from "@/typescript/types";

type Props = {
  flight: Flight;
};
const FlightCard: React.FC<Props> = ({ flight }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-4">
      <h2>{flight.ident}</h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3>{flight.origin}</h3>
          <p>{flight.readable_departure}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>{flight.destination}</h3>
          <p>{flight.readable_arrival}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
