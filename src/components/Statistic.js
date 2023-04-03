
function Statistic({ icon, title, children, className }) {
    return <div className={`relative px-[25px] flex flex-col items-center bg-white rounded ${className}`}>
        <div className="relative -top-[40px] p-[20px] bg-[#35323e] rounded-full">
            <img src={icon} alt={title} />
        </div>
        <h2 className="mb-[20px] text-[26px] font-bold">{title}</h2>
        <p className="mb-[40px] text-center text-gray-400 xl:text-left">
            {children}
        </p>
    </div>
}

export default Statistic