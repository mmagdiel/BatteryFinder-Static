import type { LogoSidebarProps } from "../../models";

import { Home } from "lucide-react";

const LogoSidebar: LogoSidebarProps = ({ handleVoid, isExpanded }) => (
  <div className="flex items-center cursor-pointer mb-8" onClick={handleVoid}>
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
      <Home className="w-5 h-5 text-primary-content" />
    </div>
    {isExpanded && (
      <span className="ml-3 font-bold text-lg">Battery Manager</span>
    )}
  </div>
);

export { LogoSidebar };
