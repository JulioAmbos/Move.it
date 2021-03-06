import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";


function MyApp({ Component, pageProps }) {
  return (    
        <Component {...pageProps} />
  );
}
import { formatWithValidation } from "next/dist/next-server/lib/utils";

export default MyApp;
