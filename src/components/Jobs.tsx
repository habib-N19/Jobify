import { useGetJobsQuery } from "@/redux/features/jobs/jobsApi"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import { useState } from "react"

import { PaginationComponent } from "./PaginationComponent"
import { Button } from "./ui/button"


function Jobs() {
    const [page, setPage] = useState(1);

    const { data: jobs, isLoading } = useGetJobsQuery({ page: page, limit: 10 })
    if (isLoading) {
        return <Loading />

    }
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {
                jobs?.data?.map(

                    (job) => (<Card key={job._id} >
                        <CardHeader>
                            <CardTitle >
                                <h1>{job.title}</h1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>

                            <p>{job.description}</p>
                        </CardContent>
                        <CardFooter className=" flex justify-end">
                            <Button variant={'outline'}>

                                <Link to={`/dashboard/job-management/${job._id}`}>
                                    View Details</Link>
                            </Button>
                        </CardFooter>
                    </Card>))}

            <div className="col-span-full">
                <PaginationComponent page={jobs?.page || 1} setPage={setPage} totalPages={jobs?.pages || 0} />
            </div>
        </div >
    )
}


export default Jobs