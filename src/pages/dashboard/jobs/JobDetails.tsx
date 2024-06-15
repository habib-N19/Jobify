import Loading from "@/components/Loading"
import { useGetJobByIdQuery } from "@/redux/features/jobs/jobsApi"
import { Link, useParams } from "react-router-dom"

export default function JobDetails() {
    const { id } = useParams<{ id: string }>()
    const jobId = id || ""

    const { data, isLoading } = useGetJobByIdQuery({ jobId })
    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h1 className="font-bold text-xl  lg:text-3xl">


                JobDetails of {data?.data.title}
            </h1>
            <Link to={`/dashboard/company-management/${data?.data.company}`}>{data?.data.company}</Link>
            <div className="text-left w-2/3 mx-auto p-5">
                <p>Job Description: {data?.data.description}</p>
                <p>Salary : {data?.data.salary}</p>
                <p>Location : {data?.data.location}</p>



            </div>
        </div>
    )
}
