import type { LayoutProps, HandleVoid } from "../../models";

import clsx from "clsx";
import { useState } from "react";

import { Sidebar } from "./Sidebar";

const Layout: LayoutProps = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleOpen: HandleVoid = () => setIsExpanded(true);
  const handleClose: HandleVoid = () => setIsExpanded(false);
  return (
    <div className="min-h-screen bg-base-100">
      <Sidebar
        handleOpen={handleOpen}
        handleClose={handleClose}
        isExpanded={isExpanded}
      />
      <main
        className={clsx(
          "transition-all duration-300",
          isExpanded && "ml-64",
          !isExpanded && "ml-16",
        )}
      >
        {children}
      </main>
    </div>
  );
};

export { Layout };
