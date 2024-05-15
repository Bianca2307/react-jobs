/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Job from "./Job";

export default function JobList({ isHome = false }) {
    const [jobsData, setJobsData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchJob = async () => {
            const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobsData(data);
                
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchJob();
    }, []);
   

    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {loading ? "Loading..." : isHome? "Recent Jobs": "All Jobs" }
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobsData.map((job) => (
                            <Job
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                type={job.type}
                                location={job.location}
                                description={job.description}
                                salary={job.salary}
                            />
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
