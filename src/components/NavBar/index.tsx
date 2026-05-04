import { useState } from "react";

import { Search as SearchIcon, ShoppingCart as CartIcon, User as UserIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Promoções", "Livros", "Ebooks", "Audiobooks", "Podcasts", "Jogos"];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around h-[72px]">

    
        <span className="text-2xl font-extrabold tracking-tight text-[#F59106] cursor-pointer shrink-0">
          Magic-books
        </span>


        <ul className="hidden md:flex items-center gap-4 text-gray-600 font-medium">
          {links.map((link) => (
            <li key={link}>
  
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm hover:text-[#F59106] hover:bg-orange-50 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

       
        <div className="flex items-center gap-4 text-gray-500 shrink-0">
          <button className="p-2 rounded-lg hover:text-[#F59106] hover:bg-orange-50 transition-colors" aria-label="Buscar">
            <SearchIcon size={20} />
          </button>
          
          <button className="p-2 rounded-lg hover:text-[#F59106] hover:bg-orange-50 transition-colors relative" aria-label="Carrinho">
            <CartIcon size={20} />
            <span className="absolute top-1 right-1 bg-[#F59106] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white translate-x-1/2 -translate-y-1/2">
              0
            </span>
          </button>

          <button className="p-2 rounded-lg hover:text-[#F59106] hover:bg-orange-50 transition-colors" aria-label="Perfil">
            <UserIcon size={20} />
          </button>

          
          <button
            className="md:hidden p-2 rounded-lg hover:text-[#F59106] hover:bg-orange-50 transition-colors ml-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <li key={link}>
              
              <a
                href="#"
                className="block px-4 py-2.5 rounded-lg text-gray-600 font-medium hover:text-[#F59106] hover:bg-orange-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;