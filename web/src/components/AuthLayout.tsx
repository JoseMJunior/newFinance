import { Outlet } from "react-router";
import Logo from "../assets/infinity_sem_fundo.png"

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
            <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col w-full md:max-w-[462px]">
                <img src={Logo} alt="Logo" className="w-3xs"/>
                
                <Outlet/>
            </main>
        </div>

    )
}