declare type ThemeProps = {
  theme: { value: any };
};

export default function ThemeResolver({ theme }: ThemeProps) {
  const cssTheme = "/theme/" + theme.value + ".css";
  return <link rel="stylesheet" href={cssTheme} />;
}
