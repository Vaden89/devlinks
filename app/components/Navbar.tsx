import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  handleActiveSection: (sectionName: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  handleActiveSection,
  activeSection,
}) => {
  return (
    <div className="w-full sm:p-6">
      <nav className="w-full flex items-center justify-between py-4 px-6 bg-white sm:rounded-xl">
        <div className="flex items-center sm:gap-2">
          <Image
            src={"/devlinkslogo.png"}
            width={24}
            height={24}
            alt="logo"
            className="w-8 h-8 sm:hidden"
          />
          <Image
            src={"/logo-grouped.png"}
            width={200}
            height={200}
            alt=""
            className="w-[146px] h-full hidden sm:flex"
          />
        </div>

        <div className="w-full justify-center flex items-center">
          <button
            className={`flex gap-2 items-center py-3 px-7 ${
              activeSection === "links" ? "bg-[#eeeaff]" : null
            } rounded-lg font-semibold text-[#633CFF]`}
            onClick={() => handleActiveSection("links")}
          >
            <Image src={"/chain-icon.png"} width={24} height={24} alt="logo" />
            <span className="sm:flex hidden">Links</span>
          </button>
          <button
            className={`flex gap-2 items-center py-3 px-7 rounded-lg font-semibold text-[#737373] ${
              activeSection === "profile" ? "bg-[#eeeaff]" : null
            }`}
            onClick={() => handleActiveSection("profile")}
          >
            <Image
              src={"/profile-icon.png"}
              width={24}
              height={24}
              alt="logo"
            />
            <span className="sm:flex hidden">Profile Details</span>
          </button>
        </div>
        <Link
          href={"/preview"}
          className="px-4 sm:px-[27px] py-[11px] rounded-lg border border-[#623bff] justify-start items-start gap-2 inline-flex"
        >
          <svg
            width="20"
            height="20"
            className="sm:hidden"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ph:eye-bold">
              <path
                id="Vector"
                d="M19.6096 9.61953C19.5807 9.55625 18.8963 8.03672 17.3846 6.525C15.3619 4.50547 12.8127 3.4375 10.0002 3.4375C7.18769 3.4375 4.63847 4.50547 2.61815 6.525C1.10643 8.03672 0.42206 9.55625 0.39081 9.61953C0.337882 9.73953 0.310547 9.86924 0.310547 10.0004C0.310547 10.1315 0.337882 10.2613 0.39081 10.3813C0.419716 10.4453 1.10409 11.9641 2.61659 13.4758C4.63847 15.4953 7.18769 16.5625 10.0002 16.5625C12.8127 16.5625 15.3619 15.4953 17.3814 13.4758C18.8939 11.9641 19.5783 10.4453 19.6072 10.3813C19.6605 10.2614 19.6882 10.1318 19.6887 10.0006C19.6891 9.86949 19.6621 9.73969 19.6096 9.61953ZM16.0111 12.1977C14.3338 13.8492 12.3119 14.6875 10.0002 14.6875C7.68847 14.6875 5.66659 13.8492 3.99159 12.1969C3.33249 11.5447 2.76553 10.8056 2.30643 10C2.76566 9.19474 3.33261 8.45589 3.99159 7.80391C5.66737 6.15078 7.68847 5.3125 10.0002 5.3125C12.3119 5.3125 14.333 6.15078 16.0088 7.80391C16.6678 8.45583 17.2348 9.19469 17.6939 10C17.2348 10.8055 16.6678 11.5447 16.0088 12.1969L16.0111 12.1977ZM10.0002 6.5625C9.32031 6.5625 8.65571 6.76411 8.09041 7.14182C7.52512 7.51954 7.08453 8.0564 6.82435 8.68453C6.56417 9.31265 6.4961 10.0038 6.62874 10.6706C6.76137 11.3374 7.08876 11.9499 7.56951 12.4307C8.05025 12.9114 8.66275 13.2388 9.32956 13.3714C9.99637 13.5041 10.6875 13.436 11.3157 13.1758C11.9438 12.9157 12.4806 12.4751 12.8584 11.9098C13.2361 11.3445 13.4377 10.6799 13.4377 10C13.4367 9.08864 13.0742 8.21489 12.4297 7.57046C11.7853 6.92603 10.9115 6.56353 10.0002 6.5625ZM10.0002 11.5625C9.69115 11.5625 9.38906 11.4709 9.13211 11.2992C8.87515 11.1275 8.67488 10.8835 8.55662 10.5979C8.43836 10.3124 8.40742 9.99827 8.46771 9.69517C8.528 9.39208 8.67681 9.11367 8.89533 8.89515C9.11385 8.67663 9.39226 8.52781 9.69536 8.46752C9.99845 8.40723 10.3126 8.43818 10.5981 8.55644C10.8836 8.6747 11.1277 8.87497 11.2994 9.13192C11.471 9.38887 11.5627 9.69097 11.5627 10C11.5627 10.4144 11.3981 10.8118 11.105 11.1049C10.812 11.3979 10.4146 11.5625 10.0002 11.5625Z"
                fill="#633CFF"
              />
            </g>
          </svg>
          <span className="font-semibold text-[#633CFF] hidden sm:flex">
            Preview
          </span>
        </Link>
      </nav>
    </div>
  );
};
