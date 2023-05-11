import UserLayout from "@/layouts/UserLayout";
import axios from "@/libraries/axios";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function UserDashboard() {

    useEffect(() => {
        axios.get('todos/1')
    }, [])

    return (
        <UserLayout>
            <div className="bg-white">

            dashboard
            <div onClick={signOut}>Lag out</div>
            </div>
        </UserLayout>
    )
}

    