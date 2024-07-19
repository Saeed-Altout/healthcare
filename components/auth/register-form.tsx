"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { registerSchema } from "@/schemas";
import { WrapperForm } from "./wrapper-form";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      register(values).then((res) => {
        if (res) {
          console.log(res.error);
          console.log(res.success);
          if (res.success) {
            router.push("/auth/login");
          }
        }
      });
    });
  };

  return (
    <WrapperForm
      headerLabel="Get started with HB3S platform by create a new account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="text"
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isPending} type="submit" className="w-full">
            Create an account
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
