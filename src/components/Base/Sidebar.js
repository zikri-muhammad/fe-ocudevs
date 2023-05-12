export default function Sidebar({ children, position = 'left', className }) {
    return (
        <div className={`bg-white shadow h-full scrollbar-none overflow-y-auto ${className}`} >
            {children}
        </div>
    )
}