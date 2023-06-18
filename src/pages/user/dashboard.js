import UserLayout from "@/layouts/UserLayout";
import axios from "@/libraries/axios";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function UserDashboard() {
    useEffect(() => {
        axios.get("todos/1");
    }, []);

    return (
        <UserLayout>
            <div className="w-full h-[467px] bg-white shadow">
                <div className="flex w-full px-14 h-full">
                    <div className="w-full h-full flex space-x-4 p-4">
                        <div className="w-[60%] h-full flex flex-col space-y-4 justify-center">
                            <div className=" p-4 text-secondary font-semibold text-6xl ">
                                I am Muhammad Zikri{" "}
                                <span className="text-primary">Backend</span>{" "}
                                Developer
                            </div>
                            <div className="p-4 text-secondary-lighter">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi ab architecto rem!
                                Delectus natus debitis est, repudiandae quidem
                                cumque! Laborum amet, nisi natus dolorum facere
                                quae quidem perferendis alias excepturi?
                            </div>
                            <div className=" p-4">
                                <button className="flex justify-center w-[200px] h-12 p-3 items-center bg-primary space-x-5">
                                    <div className="">Download CV </div>
                                    <Image
                                        alt="button"
                                        src={require("@/assets/icons/arrowright.svg")}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="w-[40%] h-full">
                            <Image
                                alt="img"
                                className="max-h-[400px] max-w-sm object-contain"
                                src={require("@/assets/images/kind.png")}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className="w-full flex flex-col items-center">
                <div className="text-secondary-light text-4xl font-semibold items-center flex justify-center pt-10">
                    Education
                </div>
                <div className="text-secondary-lighter text-sm text-center max-w-sm pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo eligendi, perspiciatis hic nemo cumque earum sequi dolor
                    fugit unde autem soluta saepe repellendus, ut ducimus
                    eveniet qui numquam architecto iure!
                </div>
            </div>
            <div onClick={signOut}>Lag out</div>
        </UserLayout>
    );
}
