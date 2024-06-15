import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi"
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import { useState } from "react"

import { PaginationComponent } from "./PaginationComponent"


function Jobs() {
    const [page, setPage] = useState(1);

    const { data: jobs, isLoading } = useGetJobsQuery({ page: page, limit: 10 })
    // const toastId = toast.loading("Loading jobs ")
    if (isLoading) {
        return <Loading />

    }
    // if (error) {
    //     toast.error("Error loading data", { id: toastId, duration: 3000 })
    // }
    // if (jobs) {
    //     toast.success("Jobs data loaded", { id: toastId, duration: 2000 })
    // }

    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {
                jobs?.data?.map(

                    (job) => (<Card key={job._id} >
                        <CardTitle >
                            <h1>{job.title}</h1>
                        </CardTitle>
                        <CardDescription>

                            <p>{job.description}</p>
                        </CardDescription>
                        <CardFooter>
                            <Link to={`/dashboard/job-management/${job._id}`}>
                                View Details</Link>
                        </CardFooter>
                    </Card>))}

            <div className="col-span-full">
                <PaginationComponent page={jobs?.page || 1} setPage={setPage} totalPages={jobs?.pages || 0} />
            </div>
        </div >
    )
}


export default Jobs