import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { ManagerRoutes } from "./ManagerRoutes";



export function Routes() {
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    );
}