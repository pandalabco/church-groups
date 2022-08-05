import "../styles/globals.css"
import styles from "../styles/Home.module.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-home bg-cover bg-opacity-40 text-gray-700">
      <Component {...pageProps} />
      <div className="bg-gray-200 bg-opacity-60">
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Church Groups
          </a>
        </footer>
      </div>
    </div>
  )
}

export default MyApp
