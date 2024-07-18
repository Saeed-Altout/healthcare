"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { BackButton } from "@/components/auth/back-button";
import { HeaderForm } from "@/components/auth/header-form";

import { Logo } from "@/components/logo";

interface WrapperFormProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const WrapperForm = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: WrapperFormProps) => {
  return (
    <Card className="w-[350px] lg:border-none lg:shadow-none">
      <CardHeader>
        <div className="w-full gap-y-2 flex flex-col items-center justify-center">
          <Logo />
          <p className="text-muted-foreground text-sm text-center">
            {headerLabel}
          </p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col gap-y-5">
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
