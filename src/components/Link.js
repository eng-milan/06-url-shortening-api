
function Link({ className, href, children, onClick }) {
    return <div
        className={`font-bold text-center list-none ${className}`}
        onClick={e => {
            if (onClick) {
                onClick(e)
            }
        }}>
        <a href={href} className="font-bold" style={{ fontSize: "inherit" }}>
            {children}
        </a>
    </div>
}

export default Link