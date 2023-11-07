import Image from "next/image";
import Links from "next/link";
import { ModeToggle } from "./Toggle";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-14 py-5">
      <div className="flex items-center gap-1 cursor-pointer">
        <Image
          src="/c-logo-black.png"
          alt="Logo Coach app"
          width="30"
          height="30"
        />
        oach
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Links
              href="https://github.com/euotiniel/coach-app"
              target="_blank"
            >
              <BsGithub />
            </Links>
          </li>
          <li>
            <Links href="https://twitter.com/euotiniel" target="_blank">
              <RiTwitterXLine />
            </Links>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
