export default function Navbar({children}) {
    return (
       <nav className="w-full p-4 bg-gray-800 text-white">
            {children}
       </nav>
    )
}