import { 
  Circle, 
  Waves, 
  Dumbbell, 
  CircleDot, 
  Footprints, 
  HeartPulse, 
  Hand,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  football: Circle,
  basketball: Circle,
  waves: Waves,
  dumbbell: Dumbbell,
  "circle-dot": CircleDot,
  footprints: Footprints,
  "heart-pulse": HeartPulse,
  "hand-fist": Hand,
};

interface CategoryIconProps {
  icon: string;
  className?: string;
}

export function CategoryIcon({ icon, className = "w-5 h-5" }: CategoryIconProps) {
  const IconComponent = iconMap[icon] || Circle;
  return <IconComponent className={className} />;
}
