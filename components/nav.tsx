import Link from "next/link";

import { routes } from "@/config";
import { NavItem } from "./nav-item";

export const Nav = () => {
  return (
    <>
      {routes.map(({ label, href }, index) => (
        <NavItem key={index} label={label} href={href} />
      ))}
    </>
  );
};
