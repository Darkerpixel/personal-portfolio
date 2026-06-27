// src/mdx.d.ts
declare module "*.mdx" {
  export const frontmatter: Record<string, unknown>;

  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}
