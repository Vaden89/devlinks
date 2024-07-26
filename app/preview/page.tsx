import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Preview() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col gap-14 sm:bg-[#D9D9D9] items-center">
      <div className="sm:w-full p-6 z-10">
        <nav className="p-4 bg-white sm:rounded-xl">
          <ul className="flex items-center justify-center sm:justify-between gap-4">
            <Link
              href={"/homepage"}
              className="px-[27px] py-[11px] border-[1px] border-[#633CFF] rounded-lg text-[#633CFF] font-semibold"
            >
              Back to Editor
            </Link>
            <Link
              href={"#"}
              className="px-[27px] py-[11px] bg-[#633CFF] rounded-lg text-white font-semibold"
            >
              Share Link
            </Link>
          </ul>
        </nav>
      </div>
      <section className="w-[349px] min-h-[569px] sm:py-14 sm:px-12 display flex flex-col items-center gap-14 bg-white shadow-lg rounded-3xl z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[104px] h-[104px] border-4 border-[#633CFF] rounded-full"></div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#333]">Ben Wright</h1>
            <span className="text-[#737373]">test@example.com</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={"#"}
            className="flex items-center p-4 bg-[#1A1A1A] text-white rounded-lg min-w-60 gap-2"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>
      </section>
      <div className="w-screen h-[357px] bg-[#623bff] rounded-bl-[32px] rounded-br-[32px] top-0  fixed hidden sm:flex" />
    </main>
  );
}
