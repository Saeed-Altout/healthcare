import Link from "next/link";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground">
      {label}
    </Link>
  );
};
