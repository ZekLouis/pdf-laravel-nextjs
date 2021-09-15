import Head from 'next/head';
import Chart from '../src/Chart';
import Link from 'next/link';

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

                <ul className="mt-5 flex items-center space-x-5">
                    <li>
                        <Link href="/printgrid">
                            <a className="underline">Print grid 🧮</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/printflex">
                            <a className="underline">Print Flex 🌪</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/printtable">
                            <a className="underline">Print table 🖼</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
