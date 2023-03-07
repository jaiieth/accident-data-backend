import { db } from "./db";
import jsonData from "../AccidentData/accident.json";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gvjwhkblnllffvshebtc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2andoa2JsbmxsZmZ2c2hlYnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5OTg1OTUsImV4cCI6MTk5MzU3NDU5NX0.bEnVSTd1NFcv0UhId3SrS0XaYJZxMAkvjFCLO0ti_QU",
  {
    db: { schema: "accident" },
  }
);

export const createAccidentTable = async () => {
  // const data = await supabase.from("accident").select()
  // console.log('data', data)
  const sql = `CREATE TABLE IF NOT EXISTS accident.accident (
      "id" INT,
      "deadyearBudha" INT,
      "deadyear" INT,
      "age" INT,
      "sex" INT,
      "deadDate" DATE,
      "province" TEXT,
      "latitude" FLOAT,
      "longitude" FLOAT,
      "icd10" TEXT,
      "vehicle" TEXT)`;
  const jsondata = (jsonData as any).map((e: any) => {
    return {
      id: e.id,
      deadyearBudha: e.deadyearBudha,
      deadyear: e.deadyear,
      age: e.age,
      sex: e.sex,
      deadDate: e.deadDate,
      province: e.province,
      latitude: e.latitude,
      longitude: e.longitude,
      icd10: e.icd10,
      vehicle: e.vehicle,
    };
  });
  db.query(sql).then(async () => {
    const { data, error } = await supabase.from("accident").insert(jsondata);
  }).then(()=>console.log("insert successfully"));
};

// createAccidentTable();

