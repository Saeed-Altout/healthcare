import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 bg-[url('/hero-img.jpg')] h-[450px] bg-top bg-cover rounded-md overflow-hidden p-10 text-center md:text-left">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white">
          Welcome, <span className="font-semibold">Mr. Ahmad Ali</span>
        </h1>
        <p className="text-white max-w-3xl">
          Discover the future of healthcare with HB3S. Our platform leverages
          advanced Near Infrared (NIR) technology to provide precise and
          non-invasive glucose measurements. Manage your health effortlessly
          from a single place.
        </p>
      </div>
      <Button className="w-full md:w-fit" variant="outline">
        Start Your Session
      </Button>
    </div>
  );
};
