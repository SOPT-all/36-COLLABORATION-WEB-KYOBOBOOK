declare module '*.svg' {
  const content: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  export default content;
}
