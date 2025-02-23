"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

interface SkillCircleProps {
  imageSrc: string;
  skillName: string;
  percentage: number;
}

export default function SkillCircle({
  imageSrc,
  skillName,
  percentage,
}: SkillCircleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = percentage;
      const duration = 1000;
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setProgress(start);
      }, 10);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="w-40 m-5">
      <div className="relative">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "#ff7c00",
            trailColor: "#ddd",
            pathTransitionDuration: 0.5,
          })}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src={imageSrc} alt={skillName} width={50} height={50} />
          <div className="mt-2 text-center">{skillName}</div>
          <div className="mt-2 text-center">{percentage}%</div>
        </div>
      </div>
    </div>
  );
}
