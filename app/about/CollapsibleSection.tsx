import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsOpen(!mediaQuery.matches);

    const handleResize = () => setIsOpen(!mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
      <div className={`flex flex-1 justify-between items-center mb-6 w-full ${className}`}>
        <h1 className="flex-1">{title}</h1>
        <CollapsibleTrigger className="ml-4" onClick={toggleCollapsible}>
          <ChevronDownIcon className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="w-full mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleSection;