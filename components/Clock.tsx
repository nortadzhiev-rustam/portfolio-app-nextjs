"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("——:——");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit", minute: "2-digit", hour12: false,
        timeZone: "Asia/Dushanbe",
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span>{time} — Dushanbe, GMT+5</span>;
}
