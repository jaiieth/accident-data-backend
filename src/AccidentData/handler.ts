import {
  getAccidentData,
  getUniqueVehicles,
  getUniqueYears,
} from "./apiFunction";
import { Request, Response, response } from "express";
import * as t from "io-ts";
import { optional } from "io-ts-extra";

const getAccidentDataCodec = t.type({
  yearQuery: optional(t.array(t.number)),
  vehicleQuery: optional(t.string),
});

export const getAccidentDataHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getAccidentDataCodec.decode(body)._tag === "Right") {
    return getAccidentData(body)
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(500).send(err));
  }
  else {
    res.status(500).send("Failed to validate codec")
  }
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
