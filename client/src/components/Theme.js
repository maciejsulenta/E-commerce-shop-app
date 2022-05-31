import { theme, GlobalStyles } from "../utils/theme";
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);
