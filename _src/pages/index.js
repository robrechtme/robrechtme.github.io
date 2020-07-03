import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Robrecht Meersman</title>
            </Head>
            <Layout>
                <h4>Deep learning for voice conversion</h4>
                <ul>
                    <li><Link href="fhvae-vc"><a>Audio samples</a></Link></li>
                </ul>
                <h4>Grafeem-naar-foneemconversie door middel van neurale netwerken</h4>
                <ul>
                    <li><a href="https://lib.ugent.be/catalog/rug01:002786220" target="_blank">Thesis</a></li>
                    <li><a href="https://scriptieprijs.be/nieuws/hoe-siri-leert-praten" target="_blank">Artikel Vlaamse Scriptieprijs</a></li>
                    <li><a href="https://www.eoswetenschap.eu/technologie/hoe-siri-leert-praten" target="_blank">Artikel Eos</a></li>
                </ul>
            </Layout>
        </>
    )
}
