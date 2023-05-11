export default function Sidebar({ children, position = 'left', className }) {
    return (
        <div className={`bg-white shadow border ${className}`} >
            {children}
        </div>
    )
}