import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;