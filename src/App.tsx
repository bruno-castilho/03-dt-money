import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
      <Transactions/>
  </ThemeProvider>
  )
}
