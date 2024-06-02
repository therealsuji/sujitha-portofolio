import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";

const Navbar = () => {
  return (
    <NavigationMenu className="ml-auto mt-4 mr-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#about-me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact-me" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle}>
              Contact Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <ThemeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
