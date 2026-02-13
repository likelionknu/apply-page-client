export type Generation = 11 | 12 | 13;
export type CardLayout = "split" | "center";

export interface ProjectCard {
  id: string;
  generation: Generation;
  title: string;
  subtitle: string;
  description: string;
  layout?: CardLayout;
}

export type SplitVariantClasses = {
  inner?: "p-0";
  row?: "pt-0";
  title: string;
  media: string;
  subtitle: string;
  desc: string;
};
