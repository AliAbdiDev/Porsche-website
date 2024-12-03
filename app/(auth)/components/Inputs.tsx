import React from "react";

interface Props {
    name: "email" | "password" | "tel";
    placeholder: "Email address" | "Password" | "Phone number";
    register: any; // نوع را به props اضافه کنید
}

function Inputs({ name, placeholder, register }: Props) {


    return (
        <div className="space-y-2">
            <label htmlFor={name || ''}>{placeholder || 'Text'}</label>
            
            <input
                id={name || ''}
                name={name || ''}
                type={name || "text"} 
                {...register(name)} 
                required
                autoComplete="off"
                placeholder={placeholder || 'Text'}
                className="bg-gray-300 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-none focus:bg-gray-100 placeholder:text-zinc-500"
            />
        </div>
    );
}

export default React.memo(Inputs);
