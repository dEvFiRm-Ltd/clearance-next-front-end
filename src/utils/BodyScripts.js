import React from 'react';
import Script from 'next/script';

export default function BodyScripts() {
    return (
        <>
            {/* Begin Google Tag Manager (in head)*/}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=GTM-TTZT4CR`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-TTZT4CR');
  `,
                }}
            />
            {/* End Google Tag Manager (in head)*/}

            {/* <--------------------------------------------------------------------------------> */}

            {/* Begin Google tag (gtag.js) (in head)*/}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=UA-103589275-1`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-103589275-1', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            {/* End Google tag (gtag.js) (in head)*/}

            <Script strategy="afterInteractive">
                {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
            ttq.setAndDefer = function (t, e) {
              t[e] = function () {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
              }
            };
            for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function (t) {
              for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
              return e
            };
            ttq.load = function (e, n) {
              var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
              var o = document.createElement("script");
              o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
              var a = document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(o, a)
            };

            ttq.load('CHQVDCJC77U7QBTM7K2G');
            ttq.page();
          }(window, document, 'ttq');
        `}
            </Script>

            {/* Begin Smart Look (in head) */}
            <Script strategy="afterInteractive">
                {`window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'c729c6be8fec80a91210aba02a7f2823e9a28b5a', { region: 'eu' });
`}
            </Script>
            {/* End Smart Look (in head) */}
        </>
    );
}
