import type { SidebarProps } from "../../models";

import { Upload, BarChart3, TrendingUp, Package } from "lucide-react";
import { LabelSidebar } from "./LabelSidebar";
import { LogoSidebar } from "./LogoSidebar";
import clsx from "clsx";

const activeClass = "bg-primary text-primary-content";
const unactiveClass = "hover:bg-base-300";
const baseClass =
  "flex items-center p-2 rounded-lg cursor-pointer transition-colors";

const Sidebar: SidebarProps = ({ handleClose, handleOpen, isExpanded }) => {
  const handleDashboard = () => {
    window.location.href = "/auth";
  };
  const handleProducts = () => {
    window.location.href = "/auth/products";
  };
  const handleVehicles = () => {
    window.location.href = "/auth/vehicles";
  };
  const handleImages = () => {
    window.location.href = "/auth/images";
  };
  const isDashboard = window.location.pathname === "/auth";
  const isProducts = window.location.pathname === "/auth/products";
  const isVehicles = window.location.pathname === "/auth/vehicles";
  const isImages = window.location.pathname === "/auth/images";
  return (
    <aside
      className={clsx(
        "fixed left-0 top-0 h-full bg-base-200 shadow-lg transition-all duration-300 z-50",
        isExpanded && "w-64",
        !isExpanded && "w-16"
      )}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className="p-4">
        <LogoSidebar handleVoid={handleDashboard} isExpanded={isExpanded} />
        <nav className="space-y-2">
          <div
            className={clsx(
              baseClass,
              isDashboard && activeClass,
              !isDashboard && unactiveClass
            )}
            onClick={handleDashboard}
          >
            <BarChart3 className="w-5 h-5" />
            {isExpanded && <LabelSidebar label="Dashboard" />}
          </div>
          <div
            className={clsx(
              baseClass,
              isProducts && activeClass,
              !isProducts && unactiveClass
            )}
            onClick={handleProducts}
          >
            <Package className="w-5 h-5" />
            {isExpanded && <LabelSidebar label="Products" />}
          </div>
          <div
            className={clsx(
              baseClass,
              isVehicles && activeClass,
              !isVehicles && unactiveClass
            )}
            onClick={handleVehicles}
          >
            <TrendingUp className="w-5 h-5" />
            {isExpanded && <LabelSidebar label="Vehicles" />}
          </div>
          <div
            className={clsx(
              baseClass,
              isImages && activeClass,
              !isImages && unactiveClass
            )}
            onClick={handleImages}
          >
            <Upload className="w-5 h-5" />
            {isExpanded && <LabelSidebar label="Images" />}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export { Sidebar };
