
function Link({ className, href, children, onClick }) {
    return <li
        className={`font-bold text-center list-none ${className}`}
        onClick={e => {
            if (onClick) {
                onClick(e)
            }
        }}>
        <a href={href} className="font-bold" style={{ fontSize: "inherit" }}>
            {children}
        </a>
    </li>
}

export default Link