import React from "react";

interface StatBoxProps {
  value: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-[#0366D6]">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default StatBox;
