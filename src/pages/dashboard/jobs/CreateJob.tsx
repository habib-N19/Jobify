import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateJobMutation } from "@/redux/features/jobs/jobsApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// Define the Zod schema for form validation
const createJobSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    company: z.string(),
    salary: z.coerce.number().min(0, "Salary must be a positive number"),
    location: z.string().min(1, "Location is required"),
});

export default function CreateJob() {
    const navigate = useNavigate();
    const [createJob] = useCreateJobMutation();

    const createJobForm = useForm<z.infer<typeof createJobSchema>>({
        resolver: zodResolver(createJobSchema),
        defaultValues: {
            title: "",
            description: "",
            company: "",
            salary: 0,
            location: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof createJobSchema>) => {
        const toastId = toast.loading("Creating job...");
        try {
            const newJob = {
                title: values.title,
                description: values.description,
                salary: Number(values.salary),
                location: values.location,
            }
            const response = await createJob(newJob).unwrap();
            console.log(response);
            toast.success("Job created successfully", { id: toastId, duration: 3000 });
            navigate("/jobs");
        } catch (error) {
            toast.error("Error creating job", { id: toastId, duration: 3000 });
        }
        console.log(values);
    };

    return (
        <div className="container mx-auto space-y-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl">Create Job</h1>
            <FormProvider {...createJobForm}>
                <form onSubmit={createJobForm.handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col text-start space-y-4">
                    <FormField
                        control={createJobForm.control}
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
                        control={createJobForm.control}
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
                        control={createJobForm.control}
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
                        control={createJobForm.control}
                        name="salary"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Salary</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Salary"
                                        {...field}

                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={createJobForm.control}
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
