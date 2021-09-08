import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

import { getProjects, project } from '@/helper/projects';
import Project from '@/components/Project';

interface props {
    projects: project[];
}

export async function getStaticProps() {
    const projects = await getProjects();

    return {
        props: { projects }
    };
}

export default function Home({ projects }: props) {
    return (
        <Layout>
            <div className="flex justify-center">
                <Head>
                    <title>Andrés Martínez</title>
                    <meta
                        name="description"
                        content="andres martinez personal website andresmarpz uruguay"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="px-5 bg-white w-full max-w-4xl h-screen min-w-320">
                    <h1 className="text-gray-900 text-5xl font-bold mt-24">
                        Hello! I'm Andrew.
                    </h1>
                    <h2 className="text-gray-600 text-lg mt-3">
                        I'm a Frontend Developer from Uruguay. I enjoy designing
                        and developing UIs. My go-to stack is <b>TypeScript</b>{' '}
                        / <b>React</b> with <b>Nextjs</b> and{' '}
                        <b>Tailwind CSS</b>.
                    </h2>
                    <div className="mt-8 flex items-center">
                        <Image
                            src="https://avatars.githubusercontent.com/u/78830288?v=4"
                            width={40}
                            height={40}
                            alt={'github avatar'}
                            className="rounded-full"
                        />
                        <div className="flex items-center ml-3">
                            <Image
                                src="/svgs/github.svg"
                                width={24}
                                height={24}
                                alt={'github logo'}
                            />
                            <a
                                className="ml-2"
                                href="https://github.com/andresmarpz">
                                Github
                            </a>
                        </div>
                        <div className="flex items-center ml-3">
                            <Image
                                src="/svgs/twitter.svg"
                                width={24}
                                height={24}
                                alt={'twitter logo'}
                            />
                            <a
                                className="ml-2"
                                href="https://twitter.com/andresmarpz">
                                Twitter
                            </a>
                        </div>
                    </div>

                    <hr className="mt-4" />

                    <h2 className="text-gray-900 text-2xl font-bold mt-16">
                        Projects
                    </h2>
                    <div>
                        <h2 className="text-gray-600 text-lg">
                            These are some of my personal projects:
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 mt-6 pb-10">
                            {projects.map((project, index) => (
                                <Project
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                    github={project.github}
                                    icon={project.icon}
                                    image={project.image}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
