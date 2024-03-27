// Textarea component extends from shadcnui - https://ui.shadcn.com/docs/components/Textarea
"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className,  ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/Textarea"
      >
       
        <textarea
        ref={ref}
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white  rounded-md px-3 py-2 text-sm
         placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
         disabled:cursor-not-allowed disabled:opacity-50
         group-hover/Textarea:shadow-none transition duration-400 focus-visible:outline-blue-500/20  outline-none
         `,
          className
        )}
        {...props}
        >

        </textarea>
        
        
          

      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
