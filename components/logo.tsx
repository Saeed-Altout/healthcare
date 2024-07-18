import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
      <Image src={"/logo.png"} alt="Logo" width={80} height={50} />
    </Link>
  );
};
