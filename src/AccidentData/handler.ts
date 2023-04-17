import {
  getAccidentData,
  getUniqueVehicles,
  getUniqueYears,
} from "./apiFunction";
import { Request, Response, response } from "express";
import * as t from "io-ts";
import { optional } from "io-ts-extra";
import redis from "redis";

const client: any = redis.createClient();

const getAccidentDataCodec = t.type({
  yearQuery: optional(t.array(t.number)),
  vehicleQuery: optional(t.string),
});

// export const getAccidentDataHandler = (req: Request, res: Response) => {
//   const body = req?.body;
//   if (getAccidentDataCodec.decode(body)._tag === "Right") {
//     return getAccidentData(body)
//       .then((response) => res.status(200).send(response))
//       .catch((err) => res.status(500).send(err));
//   }
//   else {
//     res.status(500).send("Failed to validate codec")
//   }
// };
export const getAccidentDataHandler = (req: Request, res: Response) => {
  const body = req?.body;
  const cacheKey = JSON.stringify(body);

  // Check if the data is already cached in Redis
  client.get(cacheKey, (err: any, cachedData: string) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    // If the data is cached, return it
    if (cachedData) {
      return res.status(200).send(JSON.parse(cachedData));
    }

    // If the data is not cached, retrieve it from the database
    if (getAccidentDataCodec.decode(body)._tag === "Right") {
      return getAccidentData(body)
        .then((response) => {
          // Cache the response in Redis for 5 minutes
          client.setex(cacheKey, 300, JSON.stringify(response));

          res.status(200).send(response);
        })
        .catch((err) => res.status(500).send(err));
    } else {
      res.status(500).send("Failed to validate codec");
    }
  });
};

export const getUniqueVehiclesHandler = (req: Request, res: Response) => {
  return getUniqueVehicles()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err));
};

export const getUniqueYearsHandler = (req: Request, res: Response) => {
  return getUniqueYears()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err));
};
