import { useState } from "react"
import Link from "./Link"
import ShortenBgMobile from "../images/bg-shorten-mobile.svg"
import ShortenBgDesktop from "../images/bg-shorten-desktop.svg"

function Shorten() {
    const [url, setUrl] = useState("")
    const [shortenedUrl, setShortenedUrl] = useState([])
    const [error, setError] = useState("")
    const [copiedButtonStyles, setCopiedButtonStyles] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    if (2 < shortenedUrl.length) {
                        setShortenedUrl([...shortenedUrl.slice(1), { original_link: data.result.original_link, short_link: data.result.full_short_link }])
                    } else {
                        setShortenedUrl([...shortenedUrl, { original_link: data.result.original_link, short_link: data.result.full_short_link }])
                    }
                    setError("")
                } else {
                    setError("url is not in correct format!")
                }
            })
        setUrl("")
    }

    const renderedGeneratedLinks = shortenedUrl.map((link) => {
        const handleCopyLink = () => {

            navigator.clipboard.writeText(link.short_link).catch(() => alert("Coping was not successful"))
            setCopiedButtonStyles(link.original_link)

            setTimeout(() => {
                setCopiedButtonStyles("")
            }, 2000)
        }

        const styleApplied = link.original_link === copiedButtonStyles

        return <div className="mb-[30px] rounded-lg bg-white md:mb-[20px] md:px-[25px] md:py-[15px] md:flex md:justify-between md:items-center" key={link.short_link}>
            <h3 className="px-[20px] py-[20px] border-b truncate md:p-0 md:border-none">{link.original_link}</h3>
            <div className="md:flex md:items-center md:ml-[20px]">
                <h4 className="mt-[20px] mx-[20px] text-[#2acfcf] md:m-0 md:w-[250px]">{link.short_link}</h4>
                <Link
                    className={`mx-[20px] my-[20px] py-[10px] bg-[#2acfcf] text-white rounded-lg hover:cursor-pointer text-[20px] md:m-0 md:ml-[20px] md:py-[5px] md:px-[20px] ${styleApplied && "bg-[#3b3054]"}`}
                    onClick={handleCopyLink}>
                    {styleApplied ? "Copied" : "Copy"}
                </Link>
            </div>
        </div>
    })

    return <div className=" md:relative md:-top-[70px]">
        <div
            className="rounded-lg"
            style={767 < window.innerWidth ? {
                backgroundImage: `url(${ShortenBgDesktop})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#3b3054"
            } :
                {
                    backgroundImage: `url(${ShortenBgMobile})`,
                    backgroundPosition: "top 0 right 0",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#3b3054"
                }}>
            <form className="p-[30px] rounded-lg md:flex md:items-center md:p-[50px]" onSubmit={handleFormSubmit}>
                <div className="mb-[10px] md:m-0 md:w-full">
                    <input
                        className={`p-[15px] mb-[10px] rounded w-full hover:cursor-pointer md:m-0 md:px-[20px] md:py-[10px] ${error !== "" ? "border-4 border-[#f46262]" : null}`}
                        value={url}
                        onChange={e => {
                            if (e.target.value === "") {
                                setError("Please add a link")
                            } else {
                                setError("")
                            }
                            setUrl(e.target.value)
                        }}
                        placeholder="Shorten a link here..." />
                    {error !== "" && <p className="-mt-[10px] text-[#f46262] md:absolute md:m-0">{error}</p>}
                </div>
                <Link
                    className="mt-[10px] py-[15px] bg-[#2acfcf] text-white rounded hover:cursor-pointer md:mt-0 md:ml-[20px] md:px-[30px] md:py-[10px] md:w-[200px]"
                    onClick={handleFormSubmit}>
                    Shorten it!
                </Link>
            </form >
        </div>
        <div className="mt-[20px]">
            {renderedGeneratedLinks}
        </div>
    </div>
}

export default Shorten