import Navbar from "@/components/Base/Navbar";
import { useSelector } from "react-redux";

export default function FeatureNavbarUser() {

    const user = useSelector((state) => state.user)

    return (
        <Navbar>
            {user?.account?.name}
        </Navbar>
    )
}