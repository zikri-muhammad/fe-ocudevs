import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Login() {
    const router = useRouter()
    const [form, setForm] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn("credentials", {...form, redirect: false}).then((data) =>{
            if (data.ok) {
                return router.replace('/user/dashboard')
            } else {
                toast.error(data.error)
            }
        })
    }
    
    const changeForm = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 items-start ">
                <input className="border border-blue-900 px-4 py-1.5 rounded-lg" type="email" name="email" onChange={changeForm} id="emailId" placeholder="Email" />
                <input className="border border-blue-900 px-4 py-1.5 rounded-lg" type="password" name="password" onChange={changeForm} id="passwordId" placeholder="Password" />
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg" type="submit">
                    Login
                </button>
            </form>
            
        </div>
    )
}