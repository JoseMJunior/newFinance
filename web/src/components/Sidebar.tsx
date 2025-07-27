import house from "../assets/house.svg"
import cart from "../assets/cart.svg"
import pack from "../assets/package.svg"
import bar from "../assets/bar.svg"
import users from "../assets/users.svg"
import gear from "../assets/gear.svg"

const links = [
    { icon: house, label: "Início", href: "/dashboard" },
    { icon: cart, label: "Vendas", href: "/dashboard/sales" },
    { icon: pack, label: "Produtos", href: "/dashboard/products" },
    { icon: bar, label: "Relatórios", href: "/dashboard/reports" },
    { icon: users, label: "Funcionários", href: "/dashboard/employees" },
    { icon: gear, label: "Configurações", href: "/dashboard/settings" },
]

export function Sidebar(){
    return (
        <div className="flex flex-col my-4 w-50"> 
            
            {links.map(({ href, label, icon }) => (
                <a
                    href={href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-500 transition-colors duration-300"
                >
                    <img src={icon} className="w-7" alt={label} />
                    <span className="whitespace-nowrap">{label}</span>
                </a>
            ))}
        </div>
    )
}