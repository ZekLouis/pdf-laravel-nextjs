import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex items-center h-screen justify-center p-12 bg-icoGray-100">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
