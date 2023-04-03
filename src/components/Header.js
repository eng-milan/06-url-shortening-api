import { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import Logo from "../images/logo.svg"
import Link from "./Link";

function Header() {
    const [barIsOpen, setBarIsOpen] = useState(false)

    useEffect(() => {
        if (767 < window.innerWidth) {
            setBarIsOpen(true)
        }

        let prevWidth = window.innerWidth

        function handleResize() {
            const currentWidth = window.innerWidth

            if (767 < currentWidth && prevWidth < 768) {
                setBarIsOpen(true)
            } else if (currentWidth < 768 && prevWidth > 767) {
                setBarIsOpen(false)
            }
            prevWidth = currentWidth
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleBarClick = () => {
        setBarIsOpen(!barIsOpen)
    }

    return <div className="relative md:flex">
        <div className="flex justify-between items-center text-[#9e9aa7]">
            <img src={Logo} alt="logo" />
            <GoThreeBars className="text-[30px] cursor-pointer md:hidden" onClick={handleBarClick} />
        </div>
        {barIsOpen && <nav className="mt-[30px] absolute w-full md:static md:m-0 z-10">
            <ul
                className="flex flex-col items-center py-[40px] px-[25px] bg-[#3b3054] text-white rounded-lg md:p-0 md:flex-row md:justify-between md:bg-transparent md:text-black">
                <div className="pb-[30px] w-full border-b border-gray-500 md:flex md:border-hidden md:p-0 md:w-fit md:ml-[40px]">
                    <Link className="mb-[35px] md:my-0 md:mr-[30px] md:text-[#bfbfbf] md:hover:text-black" href="/">Features</Link>
                    <Link className="mb-[35px] md:my-0 md:mr-[30px] md:text-[#bfbfbf] md:hover:text-black" href="/">Pricing</Link>
                    <Link className="md:text-[#bfbfbf] md:hover:text-black" href="/">Resources</Link>
                </div>
                <div className="pt-[30px] w-full md:flex md:items-center md:p-0 md:w-fit">
                    <Link className="mb-[35px] md:m-0 md:text-[#bfbfbf] md:hover:text-black" href="/">Login</Link>
                    <Link href="/" className="py-[10px] bg-[#2acfcf] text-white rounded-full hover:cursor-pointer md:ml-[30px] md:px-[20px] md:py-[5px]">Sign Up</Link>
                </div>
            </ul>
        </nav>}
    </div>
}

export default Header