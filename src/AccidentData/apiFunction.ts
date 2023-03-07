import { db } from "./db";

export const getAccidentData = (args: {
  yearQuery: Array<number>;
  vehicleQuery: string;
}) => {
  console.log("args", args);
  const sql =
    args.yearQuery && args.yearQuery.length !== 0
      ? args.vehicleQuery && args.vehicleQuery !== "ทั้งหมด"
        ? `SELECT * FROM accident.accident 
  WHERE "deadyearBudha" >= ${args.yearQuery[0]} AND 
  "deadyearBudha" <= ${args.yearQuery[1]} AND 
  vehicle = '${args.vehicleQuery}'`
        : `SELECT * FROM accident.accident 
  WHERE "deadyearBudha" >= ${args.yearQuery[0]} AND 
  "deadyearBudha" <= ${args.yearQuery[1]}`
      : args.vehicleQuery && args.vehicleQuery !== "ทั้งหมด"
      ? `SELECT * FROM accident.accident WHERE vehicle = '${args.vehicleQuery}'`
      : `SELECT * FROM accident.accident `;

  return db.query(sql).then((res) => res.rows);
};

export const getUniqueVehicles = () => {
  const sql = `SELECT distinct vehicle from accident.accident`;

  return db.query(sql).then((res) => res.rows.map((e) => e.vehicle));
};

export const getUniqueYears = () => {
  const sql = `SELECT distinct "deadyearBudha" from accident.accident`;

  return db
    .query(sql)
    .then((res) => res.rows.map((e) => e.deadyearBudha).sort((a, b) => a - b));
};
