import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetJobByIdQuery, useUpdateJobMutation } from "@/redux/features/jobs/jobsApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// Define the Zod schema for form validation
const updateJobSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    company: z.string().optional(),
    salary: z.coerce.number().min(0, "Salary must be a positive number"),
    location: z.string().min(1, "Location is required"),
});

export default function UpdateJob() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the jobId from the URL
    const jobId = id || "";
    const { data: job, isLoading, isError } = useGetJobByIdQuery({ jobId });

    const [updateJob] = useUpdateJobMutation();

    // Initialize the form
    const updateJobForm = useForm<z.infer<typeof updateJobSchema>>({
        resolver: zodResolver(updateJobSchema),
    });

    // Reset form values when job data is loaded
    useEffect(() => {
        if (job) {
            updateJobForm.reset({
                title: job.data.title || "",
                description: job.data.description || "",
                company: job.data.company || "",
                salary: job.data.salary || 0,
                location: job.data.location || "",
            });
        }
    }, [job, updateJobForm]);

    const onSubmit = async (values: z.infer<typeof updateJobSchema>) => {
        const updatedJob = {
            title: values.title,
            description: values.description,
            company: values.company,
            salary: values.salary,
            location: values.location,
        };
        const toastId = toast.loading("Updating job...");
        try {
            const response = await updateJob({ id: jobId, job: updatedJob }).unwrap();
            console.log(response);
            toast.success("Job updated successfully", { id: toastId, duration: 3000 });
            navigate("/dashboard/job-management");
        } catch (error) {
            toast.error("Error updating job", { id: toastId, duration: 3000 });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading job data</div>;

    return (
        <div className="container mx-auto space-y-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl">Update Job</h1>
            <FormProvider {...updateJobForm}>
                <form onSubmit={updateJobForm.handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col text-start space-y-4">
                    <FormField
                        control={updateJobForm.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Job Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={updateJobForm.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Description</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Job Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={updateJobForm.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Company" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={updateJobForm.control}
                        name="salary"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Salary</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Salary" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={updateJobForm.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </FormProvider>
        </div>
    );
}
