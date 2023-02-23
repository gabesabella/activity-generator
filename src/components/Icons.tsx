import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiRailway,
} from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";

export default function Icons() {
  return (
    <div className="absolute bottom-7 flex w-screen justify-evenly text-3xl">
      <a href="https://reactjs.org/">
        <FaReact />
      </a>
      <a href="https://tailwindcss.com/">
        <SiTailwindcss />
      </a>
      <a href="https://vercel.com/">
        <RxVercelLogo />
      </a>
      <a href="https://www.typescriptlang.org/">
        <SiTypescript />
      </a>
      <a href="https://nextjs.org/">
        <TbBrandNextjs />
      </a>
    </div>
  );
}
