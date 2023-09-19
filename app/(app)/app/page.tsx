import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

// local import
import SignOut from "../components/SignOut";
import Logo from "@/app/(root)/components/Logo";


const ApplicationPage = async () => {
    const session = await getServerSession(options);

    if(!session){
        redirect('/api/auth/signin?callback=/app')
    }

    return (
        <div>
            {/* home */}
            <Logo />
            <h1>Application</h1>
            <p>Email: { session.user?.email }</p>
            <SignOut />
        </div>
    )
}

export default ApplicationPage;