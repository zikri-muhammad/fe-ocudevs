import Sidebar from "@/components/Base/Sidebar";
import ButtonIcon from "@/components/Button/Icon";
import Image from "next/image";

export default function FeatureSidebarLeft() {
  return (
    <Sidebar className="w-[305px] flex-grow-0 p-8">
      <div className="w-full flex justify-center ">
        <div className="w-40 h-40 p-2 bg-secondary-more-lighter flex justify-center rounded-full border">
          <Image
            className="w-full h-full"
            alt="icon"
            src={require(`@/assets/icons/Home.svg`)}
          />
        </div>
      </div>
      <div className="w-full justify-center pt-2">
        <h2 className="flex justify-center font-semibold text-xl items-center">
          Muhammad Zikri
        </h2>
        <h5 className="flex justify-center font-semibold text-secondary-lighter items-center">
          Backend Developer
        </h5>
        <div className="flex space-x-2 justify-center py-5">
          <ButtonIcon
            icon="Icons-facebook.svg"
            className="!w-8 !h-8 !bg-primary"
          />
          <ButtonIcon
            icon="Icons-twitter.svg"
            className="!w-8 !h-8 !bg-primary"
          />
          <ButtonIcon
            icon="Icons-instagram.svg"
            className="!w-8 !h-8 !bg-primary"
          />
          <ButtonIcon
            icon="Icons-linkedin.svg"
            className="!w-8 !h-8 !bg-primary"
          />
          <ButtonIcon
            icon="Icons-Youtube.svg"
            className="!w-8 !h-8 !bg-primary"
          />
          <ButtonIcon
            icon="Icons-dribbble.svg"
            className="!w-8 !h-8 !bg-primary"
          />
        </div>
        <hr className="py-1" />
        <div className="flex flex-col space-y-3 py-4">
          <div className="flex justify-between items-center">
            <div className="bg-primary px-2">Age</div>
            <div className="font-semibold ">26</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-primary px-2">Residence</div>
            <div className="font-semibold ">Jakarta, Indonesia</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-primary px-2">Freelance</div>
            <div className="font-semibold text-green-700">Available</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-primary px-2">Address</div>
            <div className="font-semibold ">Jakarta, Indonesia</div>
          </div>
        </div>
        <hr className="py-1 pt-1" />
        <div className="flex flex-col space-y-3 py-4">
          <h1 className="text-xl font-semibold">Languages</h1>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              Indonesia
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[100%]"></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              English
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              45%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <hr className="py-1 pt-1" />
        <div className="flex flex-col space-y-3 py-4">
          <h1 className="text-xl font-semibold">Skills</h1>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              Laravel
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              80%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              Codeigniter
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              80%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              Node js
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              80%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-secondary-lighter dark:text-white">
              Restfull Api
            </span>
            <span className="text-sm font-medium text-secondary-lighter dark:text-white">
              100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary h-2.5 rounded-full w-[100%]"></div>
          </div>
        </div>
        <hr className="py-1 pt-1" />
        <div className="flex flex-col space-y-3 py-4">
          <h1 className="text-xl font-semibold">Extra Skills</h1>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4">
              <Image
                className="h-full w-full"
                alt="extraskills"
                src={require("@/assets/icons/Icons.svg")}
              />
            </div>
            <div className="text-secondary-lighter">Bootstap, Materilize</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4">
              <Image
                className="h-full w-full"
                alt="extraskills"
                src={require("@/assets/icons/Icons.svg")}
              />
            </div>
            <div className="text-secondary-lighter">GIT Knowledge</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4">
              <Image
                className="h-full w-full"
                alt="extraskills"
                src={require("@/assets/icons/Icons.svg")}
              />
            </div>
            <div className="text-secondary-lighter">Bootstap, Materilize</div>
          </div>
        </div>
        <hr className="py-1 pt-1 pb-4" />
        <button className="flex justify-center w-full h-full py-3 items-center bg-primary space-x-5">
          <div className="">Download CV </div>
          <Image alt="button" src={require("@/assets/icons/Vector.svg")} />
        </button>
      </div>
    </Sidebar>
  );
}
