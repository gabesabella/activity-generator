import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

const Home: NextPage = () => {
  const [activityType, setActivityType] = useState("");
  const [participants, setParticipants] = useState("");
  const [activityData, setActivityData] = useState<Activity | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleActivityTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setActivityType(event.target.value);
  };

  const handleParticipantsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setParticipants(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    axios
      .get(
        `https://www.boredapi.com/api/activity?type=${activityType}&participants=${participants}`
      )
      .then((response) => {
        setActivityData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [isLoading, activityType, participants]);

  return (
    <div className="flex h-screen flex-col place-items-center justify-center bg-slate-800 text-slate-100 ">
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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-12 lg:space-y-16 lg:text-2xl"
      >
        <h1 className="text-3xl lg:text-5xl">Bored?</h1>
        <label htmlFor="activity-type" className="font-bold">
          Let's find a random activity to do:
        </label>
        <select
          className="text-slate-800"
          id="activity-type"
          value={activityType}
          onChange={handleActivityTypeChange}
        >
          <option value="">--Please choose an activity type--</option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busy work</option>
        </select>
        <label htmlFor="participants" className="font-bold">
          Select number of participants:
        </label>
        <select
          className="text-slate-800"
          id="participants"
          value={participants}
          onChange={handleParticipantsChange}
        >
          <option value="">--Please choose number of participants--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button
          className="rounded border border-blue-200 bg-transparent py-3 px-4 font-semibold text-blue-200 hover:border-transparent hover:bg-blue-500 hover:text-white"
          type="submit"
        >
          Find Activity
        </button>
      </form>
      {isLoading && <p className="text-xl">Loading...</p>}
      {activityData && (
        <div>
          <h2 className="block w-96 py-10 text-center text-2xl">
            {activityData.activity}!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
