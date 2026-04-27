import { Search, ShoppingCart, User } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around h-20">
        
        
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold tracking-tight text-[#F59106] cursor-pointer">
            Magic-books
          </span>
        </div>

        
        <ul className="hidden md:flex gap-4 items-center space-x-8 text-gray-600 font-medium">
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Home</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Promotion</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Books</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Ebooks</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">AudioBooks</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Podcasts</li>
          <li className="hover:text-[#F59106] cursor-pointer transition-colors">Games</li>
        </ul>

  
        <div className="flex gap-4 items-center space-x-5 text-gray-500">
          <button className="hover:text-[#F59106] transition-colors" aria-label="Search">
            <Search size={22} />
          </button>
          <button className="hover:text-[#F59106] transition-colors relative" aria-label="Cart">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-[#F59106] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="hover:text-[#F59106] transition-colors" aria-label="User profile">
            <User size={22} />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;