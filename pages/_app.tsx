import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SamblContextProvider from '../context/Sambl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SamblContextProvider>
      <Component {...pageProps} />
    </SamblContextProvider>
  )
}

export default MyApp
