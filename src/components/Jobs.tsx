import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi"
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card"
import Loading from "./Loading"
import { Link } from "react-router-dom"

function Jobs() {
    const { data: jobs, error, isLoading } = useGetJobsQuery({ page: 1, limit: 10 })
    if (isLoading) {
        return <Loading />
    }
    console.log(jobs?.data, isLoading, error)
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
        </div >
    )
}

export default Jobs