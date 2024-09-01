import React from "react";
import { Progress } from "./ui/progress";
interface ProgressbarType {
  title: string;
  value: number;
  primary: string;
  secondary: string;
}
const Progressbar: React.FC<ProgressbarType> = ({
  title,
  value,
  primary,
  secondary,
}) => {
  return (
    <div className="h-[20vh] w-[30%] flex flex-col items-center justify-evenly p-2 text-white rounded-2xl">
      <p>{title}</p>
      <Progress
        className="w-[100%]"
        value={value}
        primary={primary}
        secondary={secondary}
      />
    </div>
  );
};

export default Progressbar;
