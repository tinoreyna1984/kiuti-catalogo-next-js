/* Para trabajar la sección head de forma completa se recomienda mayormente crear un archivo pages/_document.js */

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/kiuti-logo.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* Root del modal */}
                <div className="modal fade" id="modal-root" role="dialog"></div>
            </body>
        </Html>
    )
}