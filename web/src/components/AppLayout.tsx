import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";


export function AppLayout(){
    return (
        <div className="w-screen h-screen bg-gray-300 flex flex-col items-center text-black"> 
            <main className="p-3 w-full">
                <Header/>
                <Sidebar/>
                <Outlet/>
            </main>
        </div>
    )

}
