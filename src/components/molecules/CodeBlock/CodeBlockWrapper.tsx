"use client";

import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import CopyButton from "../CopyButton/CopyButton";

interface CodeBlockWrapperProps {
  children: React.ReactNode;
}

const CodeBlockWrapper: React.FC<CodeBlockWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all <pre> tags that contain a <code> tag
    const preElements = containerRef.current.querySelectorAll("pre");

    preElements.forEach((pre) => {
      // Check if we haven't already added a button
      if (pre.querySelector(".copy-button-container")) return;

      const code = pre.querySelector("code");
      if (!code) return;

      // Create a container for the button
      const buttonContainer = document.createElement("div");
      buttonContainer.className =
        "copy-button-container sticky right-0 top-0 z-20 flex justify-end p-2 h-0 min-w-full";
      pre.prepend(buttonContainer);

      // Render the CopyButton component into the container
      const root = createRoot(buttonContainer);
      root.render(<CopyButton text={code.innerText} />);
    });
  }, [children]);

  return (
    <div ref={containerRef} className="">
      {children}
    </div>
  );
};

export default CodeBlockWrapper;
