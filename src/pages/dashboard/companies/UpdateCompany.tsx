import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateCompanyMutation, useGetCompanyByIdQuery } from "@/redux/features/company-management/companiesApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const updateCompanySchema = z.object({
    name: z.string().min(1, "Name is required"),
    industry: z.string().min(1, "Industry is required"),
    contactEmail: z.string().email("Invalid email format").min(1, "Contact Email is required"),
    address: z.string().min(1, "Address is required"),
});

export default function UpdateCompany() {
    const navigate = useNavigate();
    const { id } = useParams();
    const companyId = id || ""
    const { data: company, isLoading, isError } = useGetCompanyByIdQuery({ companyId });
    const [updateCompany] = useUpdateCompanyMutation();

    const updateCompanyForm = useForm<z.infer<typeof updateCompanySchema>>({
        resolver: zodResolver(updateCompanySchema)
    });
    useEffect(() => {
        if (company) {
            updateCompanyForm.reset({
                name: company.data.name || "",
                industry: company.data.industry || "",
                contactEmail: company.data.contactEmail || "",
                address: company.data.address || ""

            });
        }
    }, [company, updateCompanyForm]);

    const onSubmit = async (values: z.infer<typeof updateCompanySchema>) => {
        const updatedCompany = {
            name: values.name,
            industry: values.industry,
            contactEmail: values.contactEmail,
            address: values.address
        };
        const toastId = toast.loading("Updating company...");
        try {

            const response = await updateCompany({ id: companyId, company: updatedCompany }).unwrap();
            console.log(response);
            toast.success("Company updated successfully", { id: toastId, duration: 3000 });
            navigate("/dashboard/company-management");
        } catch (error) {
            toast.error("Error updating company", { id: toastId, duration: 3000 });
        }
        console.log(values);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading company data</div>;

    return (
        <div className="container mx-auto space-y-8 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl">Update Company</h1>
            <FormProvider {...updateCompanyForm}>
                <form onSubmit={updateCompanyForm.handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col text-start space-y-4">
                    <FormField
                        control={updateCompanyForm.control}
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
                        control={updateCompanyForm.control}
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
                        control={updateCompanyForm.control}
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
                        control={updateCompanyForm.control}
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
                    <Button type="submit">Update</Button>
                </form>
            </FormProvider>
        </div>
    );
}
