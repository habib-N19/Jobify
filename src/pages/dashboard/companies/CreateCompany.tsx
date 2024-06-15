import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateCompanyMutation } from "@/redux/features/company-management/companiesApi";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";


const createCompanySchema = z.object({
    name: z.string().min(1, "Name is required"),
    industry: z.string().min(1, "Industry is required"),
    contactEmail: z.string().email("Invalid email format").min(1, "Contact Email is required"),
    address: z.string().min(1, "Address is required"),
});

export default function CreateCompany() {
    const navigate = useNavigate();
    const [createCompany] = useCreateCompanyMutation();

    const createCompanyForm = useForm<z.infer<typeof createCompanySchema>>({
        resolver: zodResolver(createCompanySchema),
        defaultValues: {
            name: "",
            industry: "",
            contactEmail: "",
            address: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof createCompanySchema>) => {
        const toastId = toast.loading("Creating company...");
        try {
            const response = await createCompany(values).unwrap();
            console.log(response);
            toast.success("Company created successfully", { id: toastId, duration: 3000 });
            navigate("/dashboard/company-management");
        } catch (error) {
            toast.error("Error creating company", { id: toastId, duration: 3000 });
        }
        console.log(values);
    };

    return (
        <div className="container mx-auto space-y-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl">Create Company</h1>
            <FormProvider {...createCompanyForm}>
                <form onSubmit={createCompanyForm.handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col text-start space-y-4">
                    <FormField
                        control={createCompanyForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Company Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={createCompanyForm.control}
                        name="industry"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Industry" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={createCompanyForm.control}
                        name="contactEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Contact Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={createCompanyForm.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Address" {...field} />
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
