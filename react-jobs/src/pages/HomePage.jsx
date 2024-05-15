
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobsList from "../components/JobList"
import ViewAllJobs from "../components/ViewAllJobs";

export default function Home() {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobsList isHome="true" />
            <ViewAllJobs />
        </>
    );
}