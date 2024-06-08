import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsOpen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsOpen(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-1 justify-between items-center mb-6">
        <h1 className="flex-1">{title}</h1>
        <CollapsibleTrigger className="ml-4" onClick={toggleCollapsible}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </CollapsibleTrigger>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0, transform: "translateY(-1rem)" }}
        animate={{ 
          height: isOpen ? "auto" : 0, 
          opacity: isOpen ? 1 : 0, 
          transform: isOpen ? "translateY(0)" : "translateY(-1rem)" 
        }}
        transition={{ 
          height: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.4, ease: "easeInOut" },
          transform: { duration: 0.4, ease: "easeInOut" }
        }}
        className="overflow-hidden"
      >
        <CollapsibleContent className="w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
        </CollapsibleContent>
      </motion.div>
    </Collapsible>
  );
};

export default CollapsibleSection;