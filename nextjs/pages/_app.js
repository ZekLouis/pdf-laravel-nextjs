import '../src/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen p-12">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
