'use client'
import { signOut } from "next-auth/react";

// local imports
import Button from "@/components/Button";


const SignOut = () => {
    return (
        <Button text="SignOut" onClick={() => signOut({ callbackUrl: '/' })}/>
    )
}

export default SignOut