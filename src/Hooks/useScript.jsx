import { useEffect } from "react";
import smartlookClient from "smartlook-client";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, [url]);
  smartlookClient.init("988c671c4c51c646077758666e11ff61594fb44c");
};

export default useScript;
