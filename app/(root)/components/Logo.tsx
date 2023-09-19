import Image from "next/image";
import LOGO from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={`/`}>
            <div className="logo">
                <Image src={LOGO} width={20} height={20} alt="Logo" />
                <span className="text-bold">Image Gallery</span>
            </div>
        </Link>
    );
};

export default Logo;
