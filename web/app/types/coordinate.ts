import { z } from "zod";

export type Coordinate = {
  latitude: number;
  longitude: number;
}

export const CoordinateSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
})

export const DefaultCoordinate = {
  latitude: 0,
  longitude: 0,
}