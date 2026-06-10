import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button as IconButton } from "@/components/ui/button";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Menu, ChevronDown } from "lucide-react";
import { navItems } from "../../constants";
import Logo from "@/assets/logo/Mark1.png";

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-xs xl:text-sm leading-none font-medium">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-xs xl:text-sm font-normal">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // State to manage which collapsible item is open in the mobile sheet
  const [openCollapsible, setOpenCollapsible] = useState(null);

  /**
   * Function to toggle collapsible state for a given item name
   *
   * @param {String} name
   */
  const toggleCollapsible = (name) => {
    setOpenCollapsible(openCollapsible === name ? null : name);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-[1920px] h-16 px-4 md:px-6 lg:px-12 xl:px-24 flex justify-between mx-auto items-center">
        {/* Logo or Brand Name - Visible on all screens */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="Mark 1" className="h-7 lg:h-5.5 xl:h-7" />
          </Link>
        </div>

        {/* Desktop Navigation - Hide on small screens, show on large screens */}
        <div className="hidden lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {/* If items exist, render a dropdown menu otherwise just show the link */}
              {navItems.map(({ id, label, to, items }) =>
                items && items.length > 0 ? (
                  <NavigationMenuItem key={id}>
                    <NavigationMenuTrigger className="">
                      {to ? <Link to={to}>{label}</Link> : label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      {/* If items exist, render a dropdown menu */}
                      <NavigationMenuList className="flex-col">
                        <ul className="grid grid-cols-2 w-[600px] p-2">
                          {items.map((item) => (
                            <ListItem
                              key={item.id}
                              title={item.label}
                              href={item.to}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuList>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={id}>
                    <NavigationMenuLink asChild className="">
                      <Link to={to}>{label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation - Show on small, hide on large screens */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <IconButton
                variant="outline"
                size="icon"
                className="border-none shadow-none bg-transparent"
              >
                <Menu className="size-5 sm:size-6 text-gray-900" />
                <span className="sr-only">Toggle navigation menu</span>
              </IconButton>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <DialogTitle className="sr-only">
                  Mobile Navigation Menu
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Browse menu items
                </DialogDescription>
                <Link to="/">
                  <img className="h-6 sm:h-7" src={Logo} alt="Iron Data Logo" />
                </Link>
              </SheetHeader>

              <nav className="flex flex-col space-y-6 pt-2">
                {navItems.map(({ id, label, to, items }) => (
                  <div key={id}>
                    {items && items.length > 0 ? (
                      // Collapsible for items with sub-menus
                      <Collapsible
                        open={openCollapsible === label}
                        onOpenChange={() => toggleCollapsible(label)}
                        className=""
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-md font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200">
                          {/* If 'to' is defined, link the trigger, otherwise just show name */}
                          {to ? (
                            <Link
                              to={to}
                              onClick={(e) => {
                                // Prevent link navigation if it's meant to be a collapsible trigger
                                if (items && items.length > 0)
                                  e.preventDefault();
                                toggleCollapsible(label); // Toggle collapsible
                              }}
                            >
                              {label}
                            </Link>
                          ) : (
                            <span>{label}</span>
                          )}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              openCollapsible === label ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-6 mt-2 flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                          {items.map((item) => (
                            <SheetClose asChild key={item.id}>
                              <Link
                                to={item.to}
                                className="font-semibold text-gray-800 hover:text-gray-600 py-1"
                                onClick={() => setIsSheetOpen(false)} // Close sheet on click
                              >
                                {item.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      // Simple Link for items without sub-menus
                      <SheetClose asChild>
                        <Link
                          to={to}
                          className="text-md font-semibold text-gray-900 hover:text-gray-700"
                          onClick={() => setIsSheetOpen(false)} // Close sheet on click
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Header;
