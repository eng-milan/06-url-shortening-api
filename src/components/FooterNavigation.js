import Logo from "../images/logo-white.svg"
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"
import footerNavigationData from "../data/FooterNavigationData"

import FooterNavigationBlock from "./FooterNavigationBlock"

function FooterNavigation() {

    const renderedNavigationBlocks = footerNavigationData.map((block) => {
        return <div className="mb-[50px] md:m-0" key={block.title}>
            <FooterNavigationBlock title={block.title} links={block.links} />
        </div>
    })

    return <nav className="py-[50px] flex flex-col items-center bg-[#35323e] text-white bg-[#35323e] md:flex-row md:justify-between md:items-start md:px-[25px] xl:px-[100px]">
        <img className="mb-[50px]" src={Logo} alt="logo" />
        <div className="md:flex">
            {renderedNavigationBlocks}
        </div>
        <div className="flex">
            <img className="mr-[20px] p-[5px] hover:cursor-pointer hover:bg-blue-500 rounded" src={Facebook} alt="facebook" />
            <img className="mr-[20px] p-[5px] hover:cursor-pointer hover:bg-blue-500 rounded" src={Twitter} alt="twitter" />
            <img className="mr-[20px] p-[5px] hover:cursor-pointer hover:bg-red-500 rounded" src={Pinterest} alt="pinterest" />
            <img className="p-[5px] hover:cursor-pointer hover:bg-red-500 rounded" src={Instagram} alt="instagram" />
        </div>
    </nav>
}

export default FooterNavigation