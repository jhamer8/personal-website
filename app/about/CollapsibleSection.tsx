import React, { useState } from "react";
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

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
      <div className={`flex flex-1 justify-between items-center mb-6 w-full ${className}`}>
        <h1 className="flex-1">{title}</h1>
        <CollapsibleTrigger className="ml-4" onClick={toggleCollapsible}>
          {isOpen ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
        </CollapsibleTrigger>
      </div>
      <div className={`w-full ${isOpen ? 'block' : 'hidden'}`}>
        <CollapsibleContent className="w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default CollapsibleSection;