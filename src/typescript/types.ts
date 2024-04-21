export type Aircraft = {
  ident: string;
  type: string;
  economySeats: number;
  base: string;
};

export type Flight = {
  arrivalTime: number;
  departureTime: number;
  destination: string;
  origin: string;
  ident: string;
  readable_arrival: string;
  readable_departure: string;
};

export type FlightsApiResponse = Flight[];

export type AircraftsApiResponse = Aircraft[];
