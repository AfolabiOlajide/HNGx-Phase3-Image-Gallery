// import Image from "next/image";
// import LOGO from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={`/`}>
            <div className="logo flex items-center">
                {/* <Image src={LOGO} width={20} height={20} alt="Logo" /> */}
                <span className="text-bold text-[2rem] text-gradient">Image Gallery App</span>
            </div>
        </Link>
    );
};

export default Logo;
