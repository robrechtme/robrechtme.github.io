import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
            <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
            <link rel="manifest" href="img/site.webmanifest" />
            <link rel="shortcut icon" href="img/favicon.ico" />
            <meta name="msapplication-TileColor" content="#161616" />
            <meta name="msapplication-config" content="img/browserconfig.xml" />
            <meta name="theme-color" content="#161616" />
        </Head>
        <Component {...pageProps} />
    </>
}