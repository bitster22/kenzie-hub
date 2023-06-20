import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/globals";
import { ResetStyle } from "./styles/reset";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </>
  );
};

export default App;
