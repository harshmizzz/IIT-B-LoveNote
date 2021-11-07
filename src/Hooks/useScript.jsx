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
  smartlookClient.init("40c0a7c40bdd5c58bafeac8683e3d3e650978197");
};

export default useScript;
