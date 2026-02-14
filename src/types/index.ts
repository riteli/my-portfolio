import { ReactNode } from "react";

export type AboutSection = {
  id: number;
  title: string;
  subtitle: string;
  content: ReactNode;
};

export type Work = {
  id: number;
  title: string;
  speech: string;
};

export type ContactInfo = {
  id: number;
  title: string;
  link: string;
  label: string;
};
