import Image from "next/image";
import Script from "next/script";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ marginBottom: 16 }}>Embedded Bot Test</h1>
        <p style={{ marginBottom: 24, color: "#555" }}>icon-only iframe test</p>

        <iframe
          id="tami-bot-frame"
          src="https://tau.staging.thinkact.ai/embed-bot?apiKey=ta-6d9b2f41c8e3a7f0b5d1c4e8a2f9d6b3c7e1a4f8d2b5c9a0"
          title="Mortgage Bot"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            border: 0,
            overflow: "hidden",
            background: "transparent",
            zIndex: 99999,
            width: 60,
            height: 60,
            borderRadius: 9999,
            boxShadow: "none",
            transition:
              "width 180ms ease, height 180ms ease, border-radius 180ms ease, box-shadow 180ms ease",
          }}
        />

        <Script id="tami-bot-resizer" strategy="afterInteractive">
          {`
            (function () {
              var frame = document.getElementById('tami-bot-frame');
              if (!frame) return;
              var OPEN_W = 420;
              var OPEN_H = 700;
              var COLLAPSED = 60;
              var ORIGIN_HOST = 'tau.staging.thinkact.ai';
              
              function setExpanded(open) {
                if (!frame) return;
                if (open) {
                  frame.style.width = OPEN_W + 'px';
                  frame.style.height = OPEN_H + 'px';
                  frame.style.borderRadius = '16px';
                  frame.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
                } else {
                  frame.style.width = COLLAPSED + 'px';
                  frame.style.height = COLLAPSED + 'px';
                  frame.style.borderRadius = '9999px';
                  frame.style.boxShadow = 'none';
                }
              }

              window.addEventListener('message', function (event) {
                if (!event || !event.origin || event.origin.indexOf(ORIGIN_HOST) === -1) return;
                var payload = event.data || {};
                if (payload.type !== 'tami-bot-state') return;
                setExpanded(!!payload.open);
              });
            })();
          `}
        </Script>

        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
