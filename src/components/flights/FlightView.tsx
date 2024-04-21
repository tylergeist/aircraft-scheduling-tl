import { useGetFlightsQuery } from "@/redux/api";
import { Flight } from "@/typescript/types";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import FlightCard from "./FlightCard";

const FlightView: React.FC = () => {
  const { data: flights, isLoading, isError } = useGetFlightsQuery();

  useEffect(() => {
    console.log(flights, "fights DATAAAA");
  }, [flights]);

  if (isLoading) {
    return <div>Loading Flights...</div>;
  }

  if (isError) {
    return <div>Error Loading flights</div>;
  }

  return (
    <ScrollArea.Root className="shadow-blackA4 h-[800px] w-auto overflow-hidden rounded bg-white shadow-[0_2px_10px]">
      <ScrollArea.Viewport className="h-full w-full rounded">
        <div className="flex flex-col gap-2 px-5 py-[15px]">
          <h2 className="mb-2 text-lg font-medium leading-[18px] text-slate-800">
            Flights
          </h2>
          {flights?.map((flight: Flight) => (
            <FlightCard key={flight.ident} flight={flight} />
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="bg-blackA3 duration-[160ms] hover:bg-blackA5 flex touch-none select-none p-0.5 transition-colors ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="bg-blackA3 duration-[160ms] hover:bg-blackA5 flex touch-none select-none p-0.5 transition-colors ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="bg-mauve10 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA5" />
    </ScrollArea.Root>
  );
};

export default FlightView;
