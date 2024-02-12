/* eslint-disable @typescript-eslint/no-unused-vars */
import { wrapCreateBrowserRouter } from "@sentry/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Navigation from "./src/Navigation";
import React from "react";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home";
//import InvoiceModal from "./components/modal/InvoiceModal";

/**
 * Sentry integration
 * @see https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
 */
const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);

/**
 * The applications router, using react-router data APIs
 * @see https://reactrouter.com/en/main/routers/create-browser-router
 */

const router = sentryCreateBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={<ErrorPage />}
      element={
        <Navigation>
          <Outlet />
        </Navigation>
      }
    >
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export { router };