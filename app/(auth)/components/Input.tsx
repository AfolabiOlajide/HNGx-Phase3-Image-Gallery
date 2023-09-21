'use client'
import { useState, forwardRef } from "react"

const Input = forwardRef(({ label, name, type}: { label: string, name: string, type: string }, ref:React.ForwardedRef<HTMLInputElement>) => {
    const [errorText, setErrorText] = useState<string | null>('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        if(type === 'password'){
            if(e.target.value.length < 5){
                setErrorText('password must be more than 5 characters long')
            }else{
                setErrorText('');
            }
        }else if(type === 'email'){
            if(!e.target.value.includes('@') || !e.target.value.includes('.com')){
                setErrorText('must include "@" and ".com"')
            }else{
                setErrorText('');
            }
        }
    }
    // <HTMLInputElement>

    return (
        <div className="form-control flex flex-col gap-[1rem]">
            <label className="text-primary">{label}</label>
            <input
                className={`outline-none bg-transparent border p-[.5rem] ${errorText?.length === 0 ? "border-primary/30" : "border-red-400/60" } rounded-md focus:ring focus:ring-primary/60 ${errorText?.length === 0 ? "focus:ring-primary/60" : "focus:ring-red-400/60" }`}
                name={name}
                type={type}
                onChange={(e) => handleInputChange(e)}
                onBlur={(e)=> handleInputChange(e)}
                ref={ref}
            />
            <div className="error-container text-red-400 text-[.8rem]">{errorText}</div>
        </div>
    );
});

export default Input;
