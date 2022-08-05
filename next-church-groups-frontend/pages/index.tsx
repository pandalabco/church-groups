import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import HomePage from "../components/pages/home-page"
import { getGroups } from "../services"

export type GroupModel = {
  id: number
  campus: string
  demographic: string
  group_type: string
  meeting_date: string
  zip_code: number
  additionalProp1: object
}

export type HomePropType = {
  groups: GroupModel[]
}
const Home: NextPage<HomePropType> = ({ groups }) => {
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ groups", groups)
  return (
    <div>
      <Head>
        <title>Get in a Group Today | Church Groups</title>
        <meta name="description" content="Church Groups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[90vh]">
        <HomePage groups={groups} />
      </main>
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  try {
    let props = {}
    const groups = await getGroups()
    console.log(
      "🚀 ~ file: index.tsx ~ line 26 ~ constgetServerSideProps:GetServerSideProps= ~ groups",
      groups.data
    )
    return { props: { groups: groups.data } }
  } catch (e: any) {
    console.error("Failed to get server side props for track page: ", e)
    return { notFound: true }
  }
}

export default Home
