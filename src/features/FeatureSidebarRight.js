import Sidebar from "@/components/Base/Sidebar";
import ButtonIcon from "@/components/Button/Icon";
import { setSideBarRightPointer } from "@/stores/slices/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FeatureSidebarRight() {
    const dispatch = useDispatch()
    const sidebar = useSelector((state) => state.sidebar)
    const menu = sidebar.sideBarRight.menu
    const pointer = sidebar.sideBarRight.pointer

    function setPointer(key) {
        dispatch(
            setSideBarRightPointer(key)
        )
    }

    return (
        <Sidebar className="w-[108px]">
            <div className="h-full w-full flex flex-col space-y-12 justify-center items-center">
                {
                    menu.map((item, index) => (
                        <ButtonIcon click={() => setPointer(item.key)} key={index} icon={item.icon} active={pointer == item.key} className="bg-secondary-more-lighter !p-2.5 !w-10 !h-10" />
                    ))
                }
            </div>
        </Sidebar>
    )
}