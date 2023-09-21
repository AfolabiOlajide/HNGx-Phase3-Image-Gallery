import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"

// local import
import Link from "next/link";
import { loginLink } from "@/lib/exports";
import Button from "@/components/Button";
import Logo from "./Logo";
import SignOut from "@/app/(app)/components/SignOut";


const Nav = async() => {
    const session = await getServerSession(options);

    return (
        <nav className="flex justify-between items-center p-[2rem] mb-[3rem]">
            <Logo />
            {/* login */}
            <div className="login">
                { session ? <SignOut /> : (
                    <Link href={loginLink}>
                        <Button text="Login"/>
                    </Link>
                ) }
            </div>
        </nav>
    )
}

export default Nav