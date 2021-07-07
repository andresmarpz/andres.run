import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>This site is currently under development!</h1>
                <h2>
                    You can follow the progress in the{' '}
                    <a href="https://github.com/andresmarpz/andres.run/tree/dev">
                        github repository
                    </a>
                </h2>
            </main>
        </div>
    );
}
