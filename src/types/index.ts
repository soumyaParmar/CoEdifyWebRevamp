export type CTA = {
  label: string | React.ReactNode;
  href: string;
  variant?: "contained" | "outlined";
};

export type Product = {
  id: string;
  name: string;
  description: string;
  useCase: string;
  features?: string[];
  ctas: CTA[];
  imagePath?: string;
};

export type Capability = {
  title: string;
  description: string;
  subPoints?: string[];
  iconName?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tags?: string[];
};

export type SolutionFunction = {
  title: string;
  points: string[];
  iconName?: string;
};

export type NavLink = {
  name: string;
  href: string;
};
