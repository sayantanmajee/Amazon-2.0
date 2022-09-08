import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {SessionProvider  as NextAuthProvider } from 'next-auth/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    // attatcing Auth Prvider so that authentication data can be used throught the pages
    <NextAuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
     </NextAuthProvider>

  )
}

export default MyApp
