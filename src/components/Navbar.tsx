import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../assets/mr_logo.png";

interface Route {
  href: string;
  label: string;
  subpages?: Route[];
}

const routeList: Route[] = [
  { href: "/", label: "Inicio" },
  {
    href: "/que-es-metrored",
    label: "¿Qué es MetroRed?",
    subpages: [
      { href: "/que-es-metrored/cuenta-metrored", label: "Cuenta MetroRed" },
    ],
  },
  {
    href: "#",
    label: "Medios de Pago",
    subpages: [
      { href: "/medios-pago/tarjetas", label: "Tarjetas" },
      { href: "/medios-pago/pago-qr", label: "Pago con QR" },
    ],
  },
  {
    href: "#",
    label: "Puntos de Recarga",
    subpages: [
      { href: "/puntos-recarga/listado-puntos", label: "Listado de puntos de recarga" },
      { href: "/puntos-recarga/carga-no-realizada", label: "¿Qué hago si mi carga no se realizó?" },
    ],
  },
  { href: "/busapp", label: "BusApp" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const isActive = (href: string) => location.pathname === href;
  const isSubpageActive = (subpages?: Route[]) => subpages && subpages.some((subpage) => isActive(subpage.href));

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background transition-all duration-300">
      <NavigationMenu>
        <NavigationMenuList className="container h-14 flex items-center justify-between px-4 w-full">
          {/* Logo */}
          <NavigationMenuItem className="flex items-center">
            <Link to="/" className="ml-2">
              <img src={logo} alt="Logo" className="h-[25px] w-[auto]" /> 
            </Link>
          </NavigationMenuItem>

          <div className="flex-grow" />

          {/* Menu Hamburger for Mobile and Tablet */}
          <span className="flex lg:hidden ml-50"> 
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="left" className="transition-transform duration-300">
                <SheetHeader className="flex items-center justify-center">
                  <SheetTitle className="font-bold text-xl">
                    <img src={logo} alt="Logo" className="h-[40px] w-[auto]" /> 
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col items-center gap-2 mt-6">
                  {routeList.map(({ href, label, subpages }) => (
                    <div key={label} className="w-full">
                      <div className="flex justify-between items-center w-full">
                        <Link
                          to={href}
                          onClick={subpages ? () => toggleDropdown(label) : handleLinkClick}
                          className={`${buttonVariants({ variant: "ghost" })} ${
                            isActive(href) || isSubpageActive(subpages) ? "text-[#015319] border-b-2 border-[#015319]" : ""
                          }`}
                        >
                          {label}
                        </Link>
                        {subpages && (
                          <ChevronDown className="ml-2 cursor-pointer h-4 w-4" onClick={() => toggleDropdown(label)} />
                        )}
                      </div>
                      {subpages && openDropdown === label && (
                        <div className="pl-4 flex flex-col">
                          {subpages.map(subpage => (
                            <Link
                              key={subpage.label}
                              to={subpage.href}
                              onClick={handleLinkClick}
                              className={`${buttonVariants({ variant: "ghost" })} ${
                                isActive(subpage.href) ? "text-[#015319] border-b-2 border-[#015319]" : ""
                              }`}
                            >
                              {subpage.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link to="/registrate" className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-semibold flex items-center justify-center">
                    Regístrate
                  </Link>
                  <Link to="https://gea2.busmatick.com" className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-semibold flex items-center justify-center mt-2">
                    Iniciar Sesión
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-5" style={{ marginLeft: '20px' }}>
            {routeList.map((route) => (
              <div key={route.label} className="relative">
                <Link
                  to={route.href}
                  onClick={handleLinkClick} 
                  className={`${buttonVariants({ variant: "ghost" })} relative ${
                    isActive(route.href) || isSubpageActive(route.subpages) ? "text-[#015319] border-b-2 border-[#015319]" : ""
                  }`}
                >
                  {route.label}
                </Link>
                {route.subpages && (
                  <button onClick={() => toggleDropdown(route.label)} className="ml-1">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                )}
                {route.subpages && openDropdown === route.label && (
                  <div
                    className="absolute left-0 w-full mt-2 bg-white border rounded shadow-md"
                    style={{
                      width: "auto",
                      minWidth: "200px", 
                      maxWidth: "none", 
                      overflowX: "auto", 
                      overflowY: "auto", 
                      maxHeight: "300px", 
                    }}
                  >
                    {route.subpages.map((subpage) => (
                      <Link
                        key={subpage.label}
                        to={subpage.href}
                        onClick={handleLinkClick}
                        className={`${buttonVariants({ variant: "ghost" })} block px-4 py-2 text-sm hover:bg-gray-100 ${
                          isActive(subpage.href) ? "text-[#015319] border-b-2 border-[#015319]" : ""
                        }`}
                        style={{ width: "100%" }}
                      >
                        {subpage.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/registrate" className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-semibold flex items-center justify-center">
              Regístrate
            </Link>
            <Link to="https://gea2.busmatick.com" className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-semibold flex items-center justify-center">
              Iniciar Sesión
            </Link>
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
