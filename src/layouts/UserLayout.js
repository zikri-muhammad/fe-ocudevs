import Navbar from "@/components/Base/Navbar";
import FeatureNavbarUser from "@/features/FeatureNavbarUser";
import FeatureSidebarLeft from "@/features/FeatureSidebarLeft";
import FeatureSidebarRight from "@/features/FeatureSidebarRight";
import { setAccount, setToken } from "@/stores/slices/userSlice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function UserLayout({ children }) {
    const dispatch = useDispatch();

    const { status, data } = useSession({
        required: false,
    });

    useEffect(() => {
        data?.user?.email &&
            dispatch(
                setAccount({
                    name: data.user.name,
                    email: data.user.email,
                    phone: data.user.phone,
                })
            );
        data?.user?.token &&
            dispatch(
                setToken({
                    access_token: data.user.token,
                    expires: 34567,
                })
            );
    }, [data]);

    // if (status == "loading") {
    //     return <div>...loding</div>;
    // } else if (status == "authenticated") {
        return (
            <div className="h-screen w-full flex relative">
                <div className="w-[305px]">
                    <FeatureSidebarLeft />
                </div>
                <div className="h-full flex-grow overflow-y-auto bg-[#E5E5E5] px-6">
                    {children}
                </div>
                <div className="w-[108px]">
                    <FeatureSidebarRight />
                </div>
            </div>
        );
    // } else {
    //     return <div>Acsess Not Allowed</div>;
    // }
}

UserLayout.auth = {
    unauthorized: "/auth/login",
};
