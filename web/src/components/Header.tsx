import logo from "../assets/infinity_sem_fundo.png"
import signout from "../assets/sign-out-fill.svg"
import user from "../assets/user-fill.svg"

export function Header(){
    return (
        <header className="w-full flex justify-between items-center">
            <img 
                src={logo} 
                alt="Logo"
                className="w-30"
            />
            <div className=" flex items-center gap-3">
                <span className="text-sm font-semibold text-black"> 
                    Usuário Carlos
                </span>
    
                <img 
                    src={user} 
                    alt="Perfil usuario"
                    className="my-8 cursor-pointer hover:opacity-60 transition ease-linear w-7 "
                />
                
                <img 
                    src={signout} 
                    alt="Ícone de sair"
                    className="my-8 cursor-pointer hover:opacity-60 transition ease-linear w-7"
                />
            </div>

        </header>
    )
}