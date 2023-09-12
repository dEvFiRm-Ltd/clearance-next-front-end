"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import React from "react";
type dateType = {
  date: string;
};

export const TimeCountdown = ({ date }: dateType) => {
  const mobileStyle = {
    width: 18,
    height: 28,
    fontSize: 20,
  };
  const tabStyle = {
    width: 24,
    height: 34,
    fontSize: 23,
  };
  const laptopStyle = {
    width: 32,
    height: 40,
    fontSize: 27,
  };
  const desktopStyle = {
    width: 40,
    height: 60,
    fontSize: 30,
  };
  const mobileSeparatorStyle = {
    color: "black",
    size: "4px",
  };
  const laptopSeparatorStyle = {
    color: "black",
    size: "5px",
  };
  
  const desktopSeparatorStyle = {
    color: "black",
    size: "6px",
  };
  return (
    <FlipClockCountdown
      to={date} // Date/Time  -- examples?: "2023-09-08T15:27:32.635Z"
      showLabels={true}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      labelStyle={{ fontSize: 7, fontWeight: 500, textTransform: "uppercase" }}
      digitBlockStyle={window.innerWidth <= 640 ? mobileStyle : window.innerWidth <= 768 ? tabStyle :window.innerWidth <= 1280 ? laptopStyle : desktopStyle }
      // digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
      // dividerStyle={{ color: 'white', height: 1 }}
      separatorStyle={window.innerWidth <= 640 ? mobileSeparatorStyle : window.innerWidth <= 1024 ? laptopSeparatorStyle : desktopSeparatorStyle }
      duration={0.5}
    />
  );
};
