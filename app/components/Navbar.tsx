"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { usePathname } from "next/navigation";

type NavigationItemProps = {
  href: string;
  label: string;
  active?: boolean;
};

const NavigationItem = ({ href, label, active }: NavigationItemProps) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        active={active}
        className={navigationMenuTriggerStyle}
      >
        {label}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const Navbar = () => {
  const path = usePathname();
  const navItems = [
    { href: "#about-me", label: "About Me" },
    { href: "#contact-me", label: "Contact Me" },
    { href: "#cool-stuff", label: "Cool Stuff" },
    { href: "/mycv.pdf", label: "Resume" },
  ];

  return (
    <NavigationMenu className="ml-auto mt-4 mr-4">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationItem
            key={item.href}
            {...item}
            active={path === item.href}
          />
        ))}
        <ThemeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
