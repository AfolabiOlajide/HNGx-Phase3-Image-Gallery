import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

// local import
import SignOut from "./SignOut";
import Logo from "@/app/(root)/components/Logo";

const Nav = async () => {
    const session = await getServerSession(options);

    if (!session) {
        redirect("/api/auth/signin?callback=/app");
    }

    return (
        <nav className="flex justify-between items-center p-[1rem] md:p-[2rem] mb-[3rem]">
            {/* home */}
            <Logo />
            <p className="hidden md:block">Email: {session.user?.email}</p>
            <SignOut />
        </nav>
    );
};

export default Nav;
