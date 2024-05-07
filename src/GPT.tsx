import { RouterProvider } from "react-router-dom";
import { router } from "./presentantion/router/routers";

export const GPT = () => {
  return (
    <RouterProvider router={router} />
  );
};
