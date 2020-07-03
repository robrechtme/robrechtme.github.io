import Layout from "../components/Layout"
import Head from 'next/head'

export default function Fhvae_VC() {
    return <>
        <Head>
            <title>Robrecht Meersman</title>
        </Head>
        <Layout>
            <h3>Deep learning for voice conversion: audio samples</h3>
            <h4 id="VocoderComparison">Vocoder comparison</h4>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <th>v80078_35_o</th>
                        <th>v80084_10_o</th>
                        <th>v80115_8_o</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Original</th>
                        <td><audio controls preload="metadata" src="audio/raw/v80078_35_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/raw/v80084_10_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/raw/v80115_8_o.wav" /></td>
                    </tr>
                    <tr>
                        <th>Griffin-Lim</th>
                        <td><audio controls preload="metadata" src="audio/griffin_lim/v80078_35_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/griffin_lim/v80084_10_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/griffin_lim/v80115_8_o.wav" /></td>
                    </tr>
                    <tr>
                        <th>WaveNet</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/v80078_35_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v80084_10_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v80115_8_o.wav" /></td>
                    </tr>
                    <tr>
                        <th>WaveRNN</th>
                        <td><audio controls preload="metadata" src="audio/wavernn/v80078_35_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/wavernn/v80084_10_o.wav" /></td>
                        <td><audio controls preload="metadata" src="audio/wavernn/v80115_8_o.wav" /></td>
                    </tr>
                </tbody>
            </table>
            <h4 id="AutoencoderEvaluation">Autoencoder evaluation</h4>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>n00778_9_o</th>
                        <th>n00572_0_o</th>
                        <th>v60190_0_k</th>
                        <th>v60346_5_g</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>original <br />(WaveNet)</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td>
                    </tr>
                    <tr>
                        <th>z dim 32 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00778_9_o_tar_n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00572_0_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60190_0_k_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60346_5_g_tar_v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=0, &alpha;<sub>c</sub>=0</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00778_9_o_tar_n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00572_0_o_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60190_0_k_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60346_5_g_tar_v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00778_9_o_tar_n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00572_0_o_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60190_0_k_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60346_5_g_tar_v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=100, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00778_9_o_tar_n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00572_0_o_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60190_0_k_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60346_5_g_tar_v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=100</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00778_9_o_tar_n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00572_0_o_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60190_0_k_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60346_5_g_tar_v60346_5_g.wav"></audio></td >
                    </tr >
                </tbody >
            </table >
            <h4 id="VoiceConversion">Voice conversion</h4>
            <h5>Same gender, different nationality</h5>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>n00778_9_o</th>
                        <th>n00572_0_o</th>
                        <th>v60190_0_k</th>
                        <th>v60346_5_g</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>source</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>target</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 32 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00778_9_o_tar_v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00572_0_o_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60190_0_k_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60346_5_g_tar_n00572_0_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=0, &alpha;<sub>c</sub>=0</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00778_9_o_tar_v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00572_0_o_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60190_0_k_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60346_5_g_tar_n00572_0_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00778_9_o_tar_v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00572_0_o_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60190_0_k_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60346_5_g_tar_n00572_0_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=100, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00778_9_o_tar_v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00572_0_o_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60190_0_k_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60346_5_g_tar_n00572_0_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=100</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00778_9_o_tar_v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00572_0_o_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60190_0_k_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60346_5_g_tar_n00572_0_o.wav"></audio></td >
                    </tr >
                </tbody >
            </table >
            <h5>Cross-gender, same nationality</h5>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>n00778_9_o</th>
                        <th>n00572_0_o</th>
                        <th>v60190_0_k</th>
                        <th>v60346_5_g</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>source</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>target</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 32 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00778_9_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00572_0_o_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60190_0_k_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60346_5_g_tar_v60190_0_k.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=0, &alpha;<sub>c</sub>=0</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00778_9_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00572_0_o_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60190_0_k_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60346_5_g_tar_v60190_0_k.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00778_9_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00572_0_o_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60190_0_k_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60346_5_g_tar_v60190_0_k.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=100, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00778_9_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00572_0_o_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60190_0_k_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60346_5_g_tar_v60190_0_k.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=100</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00778_9_o_tar_n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00572_0_o_tar_n00778_9_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60190_0_k_tar_v60346_5_g.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60346_5_g_tar_v60190_0_k.wav"></audio></td >
                    </tr >
                </tbody >
            </table >
            <h5>Cross-gender, cross-nationality</h5>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>n00778_9_o</th>
                        <th>n00572_0_o</th>
                        <th>v60190_0_k</th>
                        <th>v60346_5_g</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>source</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>target</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/wavenet/v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/wavenet/n00778_9_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 32 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00778_9_o_tar_v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_n00572_0_o_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60190_0_k_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z32_a10_b10_c10/src_v60346_5_g_tar_n00778_9_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=0, &alpha;<sub>c</sub>=0</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00778_9_o_tar_v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_n00572_0_o_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60190_0_k_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/src_v60346_5_g_tar_n00778_9_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00778_9_o_tar_v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_n00572_0_o_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60190_0_k_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/src_v60346_5_g_tar_n00778_9_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=100, &alpha;<sub>c</sub>=10</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00778_9_o_tar_v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_n00572_0_o_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60190_0_k_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b100_c10/src_v60346_5_g_tar_n00778_9_o.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=100</th>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00778_9_o_tar_v60346_5_g.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_n00572_0_o_tar_v60190_0_k.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60190_0_k_tar_n00572_0_o.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c100/src_v60346_5_g_tar_n00778_9_o.wav"></audio></td >
                    </tr >
                </tbody >
            </table >
            <h4 id="DialectConversion">Dialect conversion</h4>
            <table>
                <thead>
                    <th></th>
                    <th>original</th>
                    <th>converted <br />z dim 10 <br />&alpha;<sub>b</sub>=0, &alpha;<sub>c</sub>=0</th>
                    <th>converted <br />z dim 10 <br />&alpha;<sub>b</sub>=10, &alpha;<sub>c</sub>=10</th>
                </thead>
                <tbody>
                    <tr>
                        <th>n00572_0_o <br />(NL &rarr; VL)</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n00572_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/n00572_0_o_reg0_src_nl_tar_vl.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/n00572_0_o_reg0_src_nl_tar_vl.wav"></audio></td>
                    </tr >
                    <tr>
                        <th>n03984_0_k <br />(NL &rarr; VL)</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/n03984_0_k.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/n03984_0_k_reg0_src_nl_tar_vl.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/n03984_0_k_reg0_src_nl_tar_vl.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>v80073_0_o <br />(VL &rarr; NL)</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/v80073_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/v80073_0_o_reg0_src_vl_tar_nl.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/v80073_0_o_reg0_src_vl_tar_nl.wav"></audio></td >
                    </tr >
                    <tr>
                        <th>v80115_0_o <br />(VL &rarr; NL)</th>
                        <td><audio controls preload="metadata" src="audio/wavenet/v80115_0_o.wav"></audio></td>
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b0_c0/v80115_0_o_reg0_src_vl_tar_nl.wav"></audio></td >
                        <td><audio controls preload="metadata" src="audio/cgn_nl_vl_fgklno_z10_a10_b10_c10/v80115_0_o_reg0_src_vl_tar_nl.wav"></audio></td >
                    </tr >
                </tbody >
            </table >
        </Layout>
    </>
}