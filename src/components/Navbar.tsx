import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from "../assets/mr_logo.png";

interface RouteProps {
  href: string;
  label: string;
  subpages?: { href: string; label: string }[];
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/que-es-metrored",
    label: "¿Qué es MetroRed?",
    subpages: [
      { href: "/que-es-metrored/como-usarla", label: "¿Cómo Usarla?" },
      { href: "/que-es-metrored/cuenta-metrored", label: "Cuenta MetroRed" },
    ],
  },
  {
    href: "/medios-pago",
    label: "Medios de Pago",
    subpages: [
      { href: "/medios-pago/tarjetas", label: "Tarjetas" },
      { href: "/medios-pago/pago-qr", label: "Pago con QR" },
    ],
  },
  {
    href: "/puntos-recarga",
    label: "Puntos de Recarga",
    subpages: [
      { href: "/puntos-recarga/listado-puntos", label: "Listado de puntos de recarga" },
      { href: "/puntos-recarga/carga-no-realizada", label: "¿Qué hago si mi carga no se realizó?" },
      { href: "/puntos-recarga/red-recargas", label: "Red de Recargas" },
    ],
  },
  {
    href: "/mapa",
    label: "Mapa",
  },
  {
    href: "/busapp",
    label: "BusApp",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cerrar el menú lateral al hacer clic en cualquier enlace
    setOpenDropdown(null); // Cerrar el dropdown al hacer clic en cualquier enlace de navegación
  };

  const isActive = (href: string) => location.pathname === href;
  const isSubpageActive = (subpages: { href: string }[]) =>
    subpages.some(subpage => isActive(subpage.href));

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="ml-2 flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-5 w-auto"
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(!isOpen)} // Toggle para abrir/cerrar el menú lateral
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader className="flex items-center justify-center">
                  <SheetTitle className="font-bold text-xl">
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-5 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label, subpages }: RouteProps) => (
                    <div key={label} className="w-full">
                      <div className="flex justify-between items-center w-full">
                        <Link
                          to={href}
                          onClick={subpages ? () => toggleDropdown(label) : handleLinkClick}
                          className={`w-full ${buttonVariants({ variant: "ghost" })} ${
                            isActive(href) || isSubpageActive(subpages || []) ? "text-[#015319] border-b-2 border-[#015319]" : ""
                          }`}
                        >
                          {label}
                        </Link>
                        {subpages && (
                          <ChevronDown
                            className="ml-2 cursor-pointer h-4 w-4"
                            onClick={() => toggleDropdown(label)}
                          />
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
                  <Link
                    to="#"
                    className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-semibold flex items-center justify-center mt-2"
                  >
                    Regístrate
                  </Link>
                  <Link
                    to="#"
                    className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-semibold flex items-center justify-center mt-2"
                  >
                    Iniciar Sesión
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 items-center">
            {routeList.map((route: RouteProps, i) => (
              <div key={i} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={route.href}
                    onClick={() => setOpenDropdown(null)} // Cerrar dropdown al hacer clic en enlace principal
                    className={`text-[17px] ${buttonVariants({ variant: "ghost" })} ${
                      isActive(route.href) || (route.subpages && isSubpageActive(route.subpages))
                        ? "text-[#015319] border-b-2 border-[#015319]"
                        : ""
                    }`}
                  >
                    {route.label}
                  </Link>
                  {route.subpages && (
                    <ChevronDown
                      className="ml-2 cursor-pointer h-4 w-4"
                      onClick={() => toggleDropdown(route.label)}
                    />
                  )}
                </div>
                {route.subpages && openDropdown === route.label && (
                  <div className="absolute left-0 top-full mt-2 flex flex-col bg-white dark:bg-gray-800 border rounded shadow-lg">
                    {route.subpages.map(subpage => (
                      <Link
                        key={subpage.label}
                        to={subpage.href}
                        onClick={() => setOpenDropdown(null)} // Cerrar dropdown al hacer clic en enlace de subpágina
                        className={`px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
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
            <Link
              to="#"
              className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-medium flex items-center justify-center"
            >
              Regístrate
            </Link>
            <Link
              to="#"
              className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-medium flex items-center justify-center"
            >
              Iniciar Sesión
            </Link>
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
