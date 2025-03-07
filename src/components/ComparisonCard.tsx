import React from "react";

interface ComparisonCardProps {
  type: "positive" | "negative";
  title: string;
  features: string[];
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  title,
  features,
}) => {
  const isPositive = type === "positive";
  const bgColor = isPositive ? "bg-green-50" : "bg-red-50";
  const borderColor = isPositive ? "border-green-100" : "border-red-100";
  const titleColor = isPositive ? "text-green-600" : "text-red-600";
  const badgeColor = isPositive ? "bg-green-100" : "bg-red-100";
  const icon = isPositive ? "✓" : "✕";
  const iconColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className={`${bgColor} p-8 rounded-2xl border ${borderColor}`}>
      <h3 className={`text-2xl font-bold mb-4 ${titleColor} flex items-center`}>
        <span className={`${badgeColor} p-2 rounded-lg mr-3`}>{title}</span>
      </h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 text-gray-700">
            <span className={iconColor}>{icon}</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparisonCard;
