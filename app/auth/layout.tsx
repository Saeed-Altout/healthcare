import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full flex justify-center items-center bg-[url('/auth-img.jpg')] lg:bg-none bg-cover bg-center">
      <div className="absolute w-full h-full bg-black/30 z-0 block lg:hidden" />
      <div className="relative flex flex-row justify-center lg:justify-between items-center h-full">
        <main className="px-4 md:px-6 w-full flex justify-center items-center">
          {children}
        </main>
        <Image
          src={"/auth-img.jpg"}
          alt="Image Auth"
          width={1000}
          height={1000}
          className="w-full hidden lg:block md:w-1/2 object-cover h-[350px] md:h-full"
        />
      </div>
    </div>
  );
}
