import Link from "./Link"
import BoostBgMobile from "../images/bg-boost-mobile.svg"
import BoostBgDesktop from "../images/bg-boost-desktop.svg"


function Boost() {
    return <div
        className="py-[100px] flex flex-col items-center bg-[#3b3054] text-white"
        style={767 < window.innerWidth ? {
            backgroundImage: `url(${BoostBgDesktop})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#3b3054"
        } :
            {
                backgroundImage: `url(${BoostBgMobile})`,
                backgroundPosition: "top 0 right 0",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#3b3054"
            }}>
        <h3 className="mb-[20px] text-[26px] font-bold">Boost your links today</h3>
        <Link className="px-[40px] py-[10px] bg-[#2acfcf] rounded-full cursor-pointer" href="/">Get Started</Link>
    </div>
}

export default Boost