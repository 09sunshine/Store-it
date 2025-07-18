"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";



type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName: formType === "sign-up"
      ? z.string().min(2).max(50)
      : z.string().optional(),
  });
};

const AuthForm = ({type} : {type: FormType}) => {

  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  })
 

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };
   return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-h-[800px] w-full max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-8">
        <h1 className="h1 text-center text-light-100 md:text-left">{type === "sign-in" ? "Sign In" : "Sign Up"}</h1>
        {type === 'sign-up' && 
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                <FormLabel className="body-2 w-full pt-2 text-light-100">Full Name</FormLabel>

                <FormControl>
                <Input placeholder="Enter your full name" className="shad-no-focus body-2 border-none p-0 shadow-none placeholder:text-light-200" {...field} />
              </FormControl>
              </div>
              <FormMessage className="body-2 ml-4 text-red" />
            </FormItem>
          )}
          
        />}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                <FormLabel className="body-2 w-full pt-2 text-light-100">Email</FormLabel>

                <FormControl>
                <Input placeholder="Enter your email" className="shad-no-focus body-2 border-none p-0 shadow-none placeholder:text-light-200" {...field} />
              </FormControl>
              </div>
              <FormMessage className="body-2 ml-4 text-red" />
            </FormItem>
          )}
          
        />
        <Button type="submit" className="primary-btn h-[66px]" disabled={isLoading}>
          {type === "sign-in" ? "Sign In" : "Sign Up"}

          {isLoading && (
            <Image src= "/assets/icons/loader.svg" alt="loader" width={24} height={24} className="ml-2 animate-spin"/>
          )}
        </Button>
        {errorMessage && (
          <p className="body-2 mx-auto w-fit rounded-xl bg-error/5 px-8 py-4 text-center text-error">*{errorMessage}</p>
        )}

        <div className="body-2 flex justify-center">
          <p className="text-light-100">{type === "sign-in" ? "Don't have an account?" : "Already have an account?"}</p>
          <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="ml-1 font-medium text-brand">{type === "sign-in" ? "Sign Up" : "Sign In"}</Link>
        </div>
      </form>
    </Form>
    </>
    
  );
};

export default AuthForm;
