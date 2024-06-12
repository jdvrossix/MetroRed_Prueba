import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from "../assets/mr_logo.png"; // Importa la imagen del logo

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
    href: "#",
    label: "¿Qué es MetroRed?",
    subpages: [
      { href: "/como-usarla", label: "¿Cómo Usarla?" },
      { href: "/cuenta-metrored", label: "Cuenta MetroRed" },
    ],
  },
  {
    href: "#",
    label: "Medios de Pago",
    subpages: [
      { href: "/tarjetas", label: "Tarjetas" },
      { href: "/pago-qr", label: "Pago con QR" },
    ],
  },
  {
    href: "#",
    label: "Puntos de Recarga",
    subpages: [
      { href: "/listado-puntos", label: "Listado de puntos de recarga" },
      { href: "/carga-no-realizada", label: "¿Qué hago si mi carga no se realizó?" },
      { href: "/red-recargas", label: "Red de Recargas" },
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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeRoute, setActiveRoute] = useState<string>("/");

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = (href: string) => {
    setActiveRoute(href);
    setIsOpen(false); 
  };

  const isActive = (href: string) => activeRoute === href;
  const isSubpageActive = (subpages: { href: string }[]) =>
    subpages.some(subpage => isActive(subpage.href));

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              onClick={() => handleLinkClick("/")}
              className="ml-2 flex items-center"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-5 w-auto" // Ajusta la altura según sea necesario
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
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
                        <a
                          rel="noreferrer noopener"
                          href={href}
                          onClick={subpages ? () => toggleDropdown(label) : () => handleLinkClick(href)}
                          className={`w-full ${buttonVariants({ variant: "ghost" })} ${
                            isActive(href) || isSubpageActive(subpages || []) ? "text-[#015319]" : ""
                          }`}
                        >
                          {label}
                        </a>
                        {subpages && (
                          <ChevronDown
                            className="ml-2 cursor-pointer h-4 w-4" // Reduce el tamaño de la flecha
                            onClick={() => toggleDropdown(label)}
                          />
                        )}
                      </div>
                      {subpages && openDropdown === label && (
                        <div className="pl-4 flex flex-col">
                          {subpages.map(subpage => (
                            <a
                              rel="noreferrer noopener"
                              key={subpage.label}
                              href={subpage.href}
                              onClick={() => handleLinkClick(subpage.href)}
                              className={`${buttonVariants({ variant: "ghost" })} ${
                                isActive(subpage.href) ? "text-[#015319]" : ""
                              }`}
                            >
                              {subpage.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="#"
                    className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-semibold flex items-center justify-center mt-2"
                  >
                    Regístrate
                  </a>
                  <a
                    rel="noreferrer noopener"
                    href="#"
                    className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-semibold flex items-center justify-center mt-2"
                  >
                    Iniciar Sesión
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 items-center">
            {routeList.map((route: RouteProps, i) => (
              <div key={i} className="relative group">
                <div className="flex items-center">
                  <a
                    rel="noreferrer noopener"
                    href={route.href}
                    onClick={() => handleLinkClick(route.href)}
                    className={`text-[17px] ${buttonVariants({ variant: "ghost" })} ${
                      isActive(route.href) || (route.subpages && isSubpageActive(route.subpages))
                        ? "text-[#015319]"
                        : ""
                    }`}
                  >
                    {route.label}
                  </a>
                  {route.subpages && (
                    <ChevronDown
                      className="ml-2 cursor-pointer h-4 w-4" // Reduce el tamaño de la flecha
                      onClick={() => toggleDropdown(route.label)}
                    />
                  )}
                </div>
                {route.subpages && openDropdown === route.label && (
                  <div className="absolute left-0 top-full mt-2 flex flex-col bg-white dark:bg-gray-800 border rounded shadow-lg">
                    {route.subpages.map(subpage => (
                      <a
                        key={subpage.label}
                        rel="noreferrer noopener"
                        href={subpage.href}
                        onClick={() => handleLinkClick(subpage.href)}
                        className={`px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          isActive(subpage.href) ? "text-[#015319]" : ""
                        }`}
                      >
                        {subpage.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              rel="noreferrer noopener"
              href="#"
              className="w-[110px] h-[40px] border rounded-md border-[#E1E4ED] bg-[#F8FAFF] text-[#393939] font-montserrat font-semibold flex items-center justify-center"
            >
              Regístrate
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className="w-[130px] h-[40px] rounded-md bg-[#015319] text-[#FFFEFE] font-montserrat font-semibold flex items-center justify-center"
            >
              Iniciar Sesión
            </a>
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
