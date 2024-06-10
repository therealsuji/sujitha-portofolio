"use client";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.min.css";
import "@/components/tiptap/TipTap.scss";
import { useEffect } from "react";

const ClientHighLight = () => {
  useEffect(() => {
    hljs.highlightAll();
    return () => {
      hljs.highlightAll();
    };
  }, []);

  return <></>;
};

export default ClientHighLight;
