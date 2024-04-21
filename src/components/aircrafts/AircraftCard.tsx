import { Aircraft } from "@/typescript/types";

type Props = {
  aircraft: Aircraft;
};
const AircraftCard: React.FC<Props> = ({ aircraft }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-4">
      <h3>
        {aircraft.ident} - {aircraft.type}
      </h3>
      <p>Seats: {aircraft.economySeats}</p>
      <p>Base: {aircraft.base}</p>
    </div>
  );
};

export default AircraftCard;
