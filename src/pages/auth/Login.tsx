import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLoginMutation } from "@/redux/features/auth/authApi"
import { useAppDispatch } from "@/redux/hooks"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { verifyAccessToken } from "@/utils/verifyAccessToken"
import { setUser } from "@/redux/features/auth/authSlice"

const loginFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters long" }),
})


export default function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation()
    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
        const toastId = toast.loading("Logging in...")
        try {
            const userInfo = {
                email: values.email,
                password: values.password
            }
            const response = await login(userInfo).unwrap()
            console.log(response.data.accessToken);
            const user = verifyAccessToken(response.data.accessToken);
            dispatch(setUser({ user: user, token: response.data.accessToken }))
            toast.success("Logged in successfully", { id: toastId, duration: 3000 })
            navigate("/dashboard")
        } catch (error) {
            toast.error("Error logging in", { id: toastId, duration: 3000 })


        }


        console.log(values)
    }


    return (<div className="container mx-auto space-y-8 flex flex-col items-center justify-center " >

        <h1 className="text-xl font-semibold md:font-bold text-center md:text-2xl lg:text-3xl ">Login</h1>
        {/* got from shadcn docs ==> https://ui.shadcn.com/docs/components/form */}
        <FormProvider  {...loginForm}>
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
                <Button type="submit">Login</Button>
            </form>
        </FormProvider>


        <div className="text-center">
            <p>use the credentials to login and test out</p>
            <p>email: <strong>
                admin@jobify.com
            </strong>
            </p>
            <p>password:
                <strong>
                    admin
                </strong>
            </p>


        </div>
    </div>
    )
}
