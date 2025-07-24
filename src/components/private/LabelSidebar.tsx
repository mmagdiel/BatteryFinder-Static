import type { LabelSidebarProps } from "../../models";
import { ChevronRight } from "lucide-react";

const LabelSidebar: LabelSidebarProps = ({ label }) => (
  <>
    <span className="ml-3">{label}</span>
    <ChevronRight className="w-4 h-4 ml-auto" />
  </>
);

export { LabelSidebar };
