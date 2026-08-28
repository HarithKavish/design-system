export interface BlogCardProps {
  handle?: string;
  date?: string;
  title: string;
  summary?: string;
  tags?: string[];
  href?: string;
}
export declare function BlogCard(props: BlogCardProps): JSX.Element;
