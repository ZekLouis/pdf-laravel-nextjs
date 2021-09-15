import Head from 'next/head';
import Chart from '../src/Chart';

export default function Home() {
    return (
        <div className="flex h-full items-center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="font-extralight">
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <Chart />
            </main>
        </div>
    );
}
