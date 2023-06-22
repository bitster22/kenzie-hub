import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/globals";
import { ResetStyle } from "./styles/reset";

export const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </>
  );
};

export default App;
