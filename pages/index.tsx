import Head from "next/head"
import Hero from "../components/Home/Hero/Hero"
import Info from "../components/Home/Info/Info"

function Home() {
    return (
        <>
            <Head>
                <title>Home | HS Connect</title>
            </Head>
            <Hero />
            <Info
                title={"Student?"}
                description={
                    "Finding a job using LinkedIn, ZipRecruiter or other job search sites as a student can be a hassle. HS Connect is a platform that helps students find a job and get hired. You can find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to build your resume."
                }
                image={"info1.svg"}
                buttonLink={""}
                buttonText={"Find a job"}
                flip={false}
            />
            <Info
                title={"No Resume?"}
                description={
                    "Worried that you don't have a resume? Don't worry, You can use the resume builder to create a resume in just a few minutes."
                }
                image={"info2.svg"}
                buttonLink={""}
                buttonText={"Get started"}
                flip={true}
            />
            <Info
                title={"Employer?"}
                description={
                    " Help high school students find the right job they need to build their resume. You can post a job here and get matched  with students who are looking for the job. You can also connect with students and build professional relationships."
                }
                image={"info3.svg"}
                buttonLink={""}
                buttonText={"Post a job"}
                flip={false}
            />
            <Info
                title={"Need Help?"}
                description={
                    "If you have any questions or concerns, feel free to contact us. We are here to help."
                }
                image={"info4.svg"}
                buttonLink={""}
                buttonText={"Contact us"}
                flip={true}
            />
        </>
    )
}
export default Home
