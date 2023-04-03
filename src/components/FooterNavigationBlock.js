import Link from "./Link"

function FooterNavigationBlock({ title, links }) {

    const renderedLinks = links.map((link) => {
        return <Link key={link.title} href={link.href} className="mb-[10px] text-[#bfbfbf] text-[14px]">{link.title}</Link>
    })

    return <div className="flex flex-col items-center md:mx-[35px] md:items-start">
        <p className="mb-[20px] text-[14px] font-bold">{title}</p>
        {renderedLinks}
    </div >
}

export default FooterNavigationBlock