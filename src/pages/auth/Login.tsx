import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const loginFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters long" }),
})


export default function Login() {
    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "admin@jobify.com",
            password: "admin"
        }
    })
    const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
        console.log(values)
    }


    return (<div className="container mx-auto space-y-8 flex flex-col items-center justify-center " >

        <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl ">Login</h1>
        {/* got from shadcn docs ==> https://ui.shadcn.com/docs/components/form */}
        <Form  {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col text-start space-y-4">
                <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email " {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="password " {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>



    </div>
    )
}
