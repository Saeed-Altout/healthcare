import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
