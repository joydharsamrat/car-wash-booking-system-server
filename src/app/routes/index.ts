import express from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { serviceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slots/slots.route";

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: authRoutes },
  { path: "/services", route: serviceRoutes },
  { path: "/slots", route: slotRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
