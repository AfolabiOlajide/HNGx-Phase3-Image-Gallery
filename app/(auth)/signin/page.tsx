'use client'
import { useRef } from "react"
import { signIn } from "next-auth/react";
import { useSearchParams } from 'next/navigation'
// local
import Input from "../components/Input";

function SignIn() {
    const searchParams = useSearchParams()
    const errorParam = searchParams.get('error') 
    console.log(errorParam)

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const handleSignIn = async ()=> {
        const result = await signIn("credentials", {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            redirect: true,
            callbackUrl: "/app"
        })
    }
    return (
        <div className=" flex flex-col gap-[2rem]">
            {/* Error */}
            { errorParam && 
                <div className="error bg-red-600 text-white p-[1rem] rounded-md">
                    <p>There was a problem signing you in, please try again with the right credentials.</p>
                </div>
            }
            <Input ref={emailRef} label="Email" name="email" type="email" />
            <Input ref={passwordRef} label="Password" name="password" type="password" />
            <button className="bg-grad p-[1rem] rounded-md" type="submit" onClick={handleSignIn}>
                Sign in
            </button>
        </div>
    );
}

export default SignIn;

