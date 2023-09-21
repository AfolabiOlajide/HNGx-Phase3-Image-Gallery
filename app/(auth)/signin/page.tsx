'use client'
import { useRef } from "react"
import { signIn } from "next-auth/react";
// local
import Input from "../components/Input";

function SignIn() {
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
            <Input ref={emailRef} label="Email" name="email" type="email" />
            <Input ref={passwordRef} label="Password" name="password" type="password" />
            <button className="bg-grad p-[1rem] rounded-md" type="submit" onClick={handleSignIn}>
                Sign in
            </button>
        </div>
    );
}

export default SignIn;

