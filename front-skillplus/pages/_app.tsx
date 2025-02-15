import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Provider} from 'react-redux'
import store from "@/redux/store"
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <ToastContainer/>
 <Component {...pageProps} />
  </Provider>
 )
}
