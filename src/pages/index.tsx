import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="flex h-screen flex-col place-items-center justify-center bg-slate-800 text-slate-100">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <h1 className="text-3xl">Bored? Don't be!</h1>
        <label htmlFor="activity-type">What kind of activity?</label>
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
        <label htmlFor="participants">Select number of participants:</label>
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
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button
          className="rounded border border-blue-200 bg-transparent py-2 px-4 font-semibold text-blue-200 hover:border-transparent hover:bg-blue-500 hover:text-white"
          type="submit"
        >
          Find Activity
        </button>
      </form>
      {isLoading && <p className="text-xl">Loading...</p>}
      {activityData && (
        <div>
          <h2 className="block w-96 py-10 text-center text-xl">
            {activityData.activity}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
