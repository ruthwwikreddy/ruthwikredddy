
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
