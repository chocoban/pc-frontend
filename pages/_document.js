import Document, {
  Head, Main, NextScript
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js'></script>
        </body>
      </html>
    );
  }
}
