import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/Io";

export default function Nav() {
  return (
    <div className="absolute top-0 h-24 w-full">
      <ul className="flex h-full w-full items-center justify-evenly font-semibold">
        <a href="https://github.com/gabesabella" className="flex gap-2">
          <li>Github</li>
          <AiFillGithub className="text-2xl" />
        </a>

        <a href="https://github.com/gabesabella" className="flex gap-2">
          <li>CV</li>
          <IoIosPaper className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/" className="flex gap-2">
          <li>LinkedIn</li>
          <AiFillLinkedin className="text-2xl" />
        </a>
      </ul>
    </div>
  );
}
