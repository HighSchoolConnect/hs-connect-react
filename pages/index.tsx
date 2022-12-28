import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { Auth, withSSRContext } from "aws-amplify"
// import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"
import Hero from "../components/Home/Hero/Hero"
import Info from "../components/Home/Info/Info"

// import { listPositions } from "../src/graphql/queries";
// interface JobProps {
//     id: string;
//     name: string;
//     description: string;
//     company: string;
//     location: string;
//     salary: string;
//     type: string;
//     pictureUrl: string;
// }
interface userProps {
    id: string
    username: string
    email: string
}
// interface HomeProps {
//     jobs: JobProps[];
// }
function Home() {
    const [user, setUser] = useState<userProps>()

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                setUser(user)
                console.log(user)
            })
            .catch((err) => console.log(err))
    }, [])

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
//@ts-ignore
export default Home

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//     const SSR = withSSRContext({ req });

//     try {
//         const user = await SSR.Auth.currentAuthenticatedUser();

//         const response = await SSR.API.graphql({
//             query: listPositions,
//             authMode: "AMAZON_COGNITO_USER_POOLS",
//             // variables: {
//             //     filter: {
//             //         company: {
//             //             eq: "Rad"
//             //         },
//             //     },
//             // },
//         });

//         return {
//             props: {
//                 jobs: response.data.listPositions.items,
//             },
//         };
//     } catch (err) {
//         console.log(err);
//     }

//     return {
//         props: {},
//     };
// };
