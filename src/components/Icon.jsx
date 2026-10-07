import * as icons from "lucide-react";

const Icon = ({ icon, className, ...props }) => {
  if (!icon) return null;
  
  // Convert kebab-case (e.g. "map-pin") to PascalCase (e.g. "MapPin")
  const iconName = icon
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  const LucideIcon = icons[iconName];
  
  if (!LucideIcon) {
    console.warn(`Icon '${icon}' (mapped to '${iconName}') not found in lucide-react`);
    return null;
  }
  
  return <LucideIcon className={className} {...props} />;
};

export default Icon;
