import React from 'react';
import { BsHourglassSplit, BsChat } from 'react-icons/bs';

const StepBanner = () => {
  return (
    <div className="flex flex-row gap-7">
      <div className="flex flex-row gap-6">
        <div className="h-full w-auto">
          <div className="border-none p-3 rounded-sm bg-white/10">
            <BsHourglassSplit className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg text-white">
            Self-paced Learning
          </p>
          <span className="text-white/60">
            This feature allows learners to progress through the course at their
            own pace, rather than being tied to a fixed schedule. This can be
            especially useful for learners who have busy schedules or who prefer
            to learn at their own speed.
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="h-full w-auto">
          <div className="border-none p-3 rounded-sm bg-white/10">
            <BsChat className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-lg text-white">
            Self-paced Learning
          </p>
          <span className="text-white/60">
            This feature allows learners to progress through the course at their
            own pace, rather than being tied to a fixed schedule. This can be
            especially useful for learners who have busy schedules or who prefer
            to learn at their own speed.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepBanner;
