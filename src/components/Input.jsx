import React from "react";
import { useId } from "react";
import './tailwind-styles.css'


function Input({ label, type, placeholder, className = "",maxlength,  ...props  },ref) {
  const id = useId();
  return (
    <div className="w-full">
      <label class="font-medium text-gray-900" id={id}>
        {label}
      </label>
      <input type={type}
      id={id} 
      className=" flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      placeholder={placeholder} 
      ref={ref}
      maxlength={maxlength}
      {...props } required/>
    </div>
  );
}

export default React.forwardRef(Input);

// text-3 font-medium text-gray-900 