import express, { Application, Request, Response } from "express";
import { AccidentRoutes } from "./src/AccidentData";
// import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import cors from "cors";
// import { createAccidentTable } from "./src/AccidentData/createAccidentTable";
// createAccidentTable()

dotenv.config();

// const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
// const supabaseAnonKey = process.env.SUPABASE_ANONKEY;


// const supabase =
//   supabaseUrl && supabaseAnonKey && createClient(supabaseUrl, supabaseAnonKey);
const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://accident-map-dashboard.web.app",
    ],
  })
);

AccidentRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
