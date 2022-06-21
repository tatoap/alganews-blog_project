import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
