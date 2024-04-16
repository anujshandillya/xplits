"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z
  .object({
    image: z.string(),
    firstName: z.string().max(50),
    lastName: z.string().max(50),
    emailAddress: z.string().email(),
    oldpassword: z.string(),
    newpassword: z.string().min(8).max(12),
    passwordConfirm: z.string(),
  })
  .refine((data) => {
    // old password validation
    // confirm password
    if (data.newpassword === data.passwordConfirm) return false;
  });

const page = ({ params }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      firstName: "",
      lastName: "",
      emailAddress: "registeredemail@abc.com",
      oldpassword: "",
      newpassword: "",
      passwordConfirm: "",
    },
  });
  const handleSubmit = () => {};
  return (
    <>
      <div className="flex w-full justify-center m-3">
        <section className="flex flex-col gap-3 w-3/4">
          <h1 className="text-4xl font-medium">Your account</h1>
          <div className="flex">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex gap-3"
              >
                <div className="justify-center">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => {
                      return (
                        <>
                          <Avatar className="w-72 h-72">
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                          </Avatar>
                          <Input className="" type="file" {...field} />
                        </>
                      );
                    }}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-2 my-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled
                                placeholder="email"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="oldpassword"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Old Password"
                                type="password"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="newpassword"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="New Password"
                                type="password"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="passwordConfirm"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Confirm new Password"
                                type="password"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8 my-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </form>
            </Form>
            <p>{params.id}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
