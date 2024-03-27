"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/background-beams";

function ContactPage() {
  return (
    <div className=' flex  items-center flex-col pt-32 min-h-screen bg-gray-100 dark:bg-gray-900'>
      <BackgroundBeams className=" absolute top-0 left-0 w-full h-full z-0" />
      <div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <h2 className=' text-2xl font-bold antialiased pb-4'>Have a Question? Let&apos;s Talk Music. </h2>
      <p className="text-center text-xs text-gray-200">The Harmony Between You and Music - Starts Here.</p>
      
        <form className="my-8 z-10">
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Dhaval" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Dharaviya" type="text" />
            </LabelInputContainer>
          </div>
          <div className="flex mb-4">
          <LabelInputContainer className="">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="dhaval@gmail.com" type="email" />
          </LabelInputContainer>
          </div>
          <div className="flex mb-4">        
          <LabelInputContainer className="">
            <Label htmlFor="Subject">Subject</Label>
            <Input id="Subject"
              className="h-20 resize-none"
              type="textarea" />
          </LabelInputContainer>
          </div>        

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  )
}

export default ContactPage

const BottomGradient = () => {
  return (
    <>
      <span className=" z-10 group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className=" z-10 group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(" z-10 flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};