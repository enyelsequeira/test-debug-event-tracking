import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(window);
  }, []);
  return (
    <>
      <Head>
        <title>Mirror World</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://d39gv0w0je0u4w.cloudfront.net/ui/v1_0_0/mirror_world_favicon.svg"
        />

        <meta
          property="og:title"
          content="Worlds as Games: AI powered crypto content matrix"
        />
        <meta
          property="og:description"
          content="Mirror World is a content matrix with AI powered virtual life forms in each one of its games. All virtual lives are interoperable across all games, which ensures that holders will have the freedom to enter each one of the GameFi."
        />
        <meta
          property="og:image"
          content="https://d39gv0w0je0u4w.cloudfront.net/ui/v1_0_0/mirror_world_favicon.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="Mirror World" />
        <meta
          property="twitter:description"
          content="Mirror World is a content matrix with AI powered virtual life forms in each one of its games. All virtual lives are interoperable across all games, which ensures that holders will have the freedom to enter each one of the GameFi."
        />
      </Head>

      <Script
        id="intercom-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           !function (e) { if (!window.ThinkingDataAnalyticalTool) { var n = e.sdkUrl, t = e.name, r = window, a = document, i = "script", l = null, s = null; r.ThinkingDataAnalyticalTool = t; var o = ["track", "quick", "login", "identify", "logout", "trackLink", "userSet", "userSetOnce", "userAdd", "userDel", "setPageProperty", "setSuperProperties", "setDynamicSuperProperties", "clearSuperProperties", "timeEvent", "unsetSuperProperties", "initInstance"]; r[t] = function (e) { return function () { if (this.name) (r[t]._q = r[t]._q || []).push([e, arguments, this.name]); else if ("initInstance" === e) { var n = arguments[0]; r[t][n] = { name: n }; for (var a = 0; a < o.length; a++)r[t][n][o[a]] = r[t].call(r[t][n], o[a]); (r[t]._q1 = r[t]._q1 || []).push([e, arguments]) } else (r[t]._q = r[t]._q || []).push([e, arguments]) } }; for (var u = 0; u < o.length; u++)r[t][o[u]] = r[t].call(null, o[u]); r[t].param = e, r[t].__SV = 1.1, l = a.createElement(i), s = a.getElementsByTagName(i)[0], l.async = 1, l.src = n, s.parentNode.insertBefore(l, s) } }(
    {

          appId:'f0df5af0e6d146b1927af720d4af8eed', 
       name: "ta",
        sdkUrl: "../../ta_js_sdk/thinkingdata.min.js",
       serverUrl:'https://global-receiver-ta.mirrorworld.fun/sync_js',
        loaded: function(ta) {
            var currentId = ta.getDistinctId();
            ta.identify(currentId + '_1');
            ta.quick('autoTrack');
        }})`,
        }}
      />
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
