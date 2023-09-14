import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Test-generator-app-project.png";
import project2 from "../../public/images/projects/project_1.gif";
import project3 from "../../public/images/projects/project_2.gif";
import project4 from "../../public/images/projects/project_3.gif";
import project5 from "../../public/images/projects/Recipe-app.png";
const FeaturedProject = ({ type, title, summary, img, link, github }) => (
  <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative'>
    <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
    <Link
      href={link}
      target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
    >
      <Image src={img} className='w-full h-auto' alt='project' />
    </Link>
    <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
      <span className='text-primary font-medium text-xl'>{type}</span>
      <Link
        href={link}
        target='_blank'
        className='hover:underline underline-offset-2'
      >
        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
      </Link>
      <p className='my-2 font-medium text-dark'>{summary}</p>
      <div className='mt-2 flex items-center '>
        <Link href={github} target='_blank' className='w-10'>
          <GithubIcon />
        </Link>
        <Link
          href={link}
          target='_blank'
          className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
        >
          Demo
        </Link>
      </div>
    </div>
  </article>
);

const Project = ({ title, type, img, link, github }) => (
  <article
    className='w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative
    '
  >
    <Link
      href={link}
      target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'
    >
      <Image src={img} className='w-full h-auto' alt='project' />
    </Link>
    <div className='w-full flex flex-col items-start justify-between mt-4 '>
      <span className='text-primary font-medium text-xl'>{type}</span>
      <Link
        href={link}
        target='_blank'
        className='hover:underline underline-offset-2'
      >
        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
      </Link>

      <div className='mt-2 w-full flex items-center justify-between '>
        <Link
          href={link}
          target='_blank'
          className='text-lg font-semibold hover:underline underline-offset-2'
        >
          Demo
        </Link>
        <Link href={github} target='_blank' className='w-10'>
          <GithubIcon />
        </Link>
      </div>
    </div>
  </article>
);
const projects = () => {
  return (
    <>
      <Head>
        <title>Rustam Nortadzhiev | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16'
          />
          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12 '>
              <FeaturedProject
                type='Featured Project'
                title='Quiz & Test generating app'
                summary='A feature-rich Test Generating App using React, Material-Ui, Redux, React Router and more libraries. 
                  It is an amzing app that helps teachers and educators to prepare tasks, assignments, quizes, and exams . 
                  You can easily prepare an exam from the test bank or you can type your own questions.'
                img={project1}
                link='exam.rustamnortadzhiev.com'
                github='https://github.com/nortadzhiev-rustam/test-bank/tree/alternative'
              />
            </div>
            <div className='col-span-6'>
              <Project
                type='Project'
                title='To-do app'
                img={project2}
                link='https://todo-app-280992.netlify.app/'
                github='https://github.com/nortadzhiev-rustam/todo-app'
              />
            </div>
            <div className='col-span-6'>
              {" "}
              <Project
                type='Project'
                title='Pomodoro timer'
                img={project3}
                link='https://timer-setter.netlify.app/'
                github='https://github.com/nortadzhiev-rustam/timer-app'
              />
            </div>
            <div className='col-span-12 '>
              <FeaturedProject
                type='Featured Project'
                title='School website'
                summary='A school official website.'
                img={project4}
                link='https://cepi-edu.org'
                github='#'
              />
            </div>
            <div className='col-span-6'>
              <Project
                type='Project'
                title='Recipe app'
                img={project5}
                link='#'
                github='https://github.com/nortadzhiev-rustam/recipe-app'
              />
            </div>
            <div className='col-span-6'>Project 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
