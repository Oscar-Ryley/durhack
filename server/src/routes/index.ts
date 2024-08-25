import { App } from "@otterhttp/app"

import type { Request, Response } from "@/types"
import { authApp } from "@/routes/auth"
import { registerInterestRoutesApp } from "@/routes/register-interest"

export const routesApp = new App<Request, Response>()

routesApp.use("/auth", authApp)
routesApp.use("register-interest", registerInterestRoutesApp)
