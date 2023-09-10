import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import React from "react";
type dateType={
    date: string;
}

export const TimeCountdown = ({date}: dateType) => {
  return (
    <FlipClockCountdown
      to={date} // Date/Time  -- examples?: "2023-09-08T15:27:32.635Z"
      showLabels={true}
      labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
      labelStyle={{ fontSize: 7, fontWeight: 500, textTransform: 'uppercase' }}
      digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
        // dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'black', size: '6px' }}
        duration={0.5}
    />
  );
};
