import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import Layout from "./layouts/Layout";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

export default function App() {
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(newJob)
        });

        return
    };

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
        return
    }

    const updateJob = async (job) => {
        const res = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(job)
        });
        return
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="jobs" element={<JobsPage />} />
                    <Route
                        path="/jobs/:id"
                        element={<JobPage deleteJob={deleteJob} />}
                    />
                    <Route path="/edit/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} />
                    <Route path="add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
                    
                    
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
