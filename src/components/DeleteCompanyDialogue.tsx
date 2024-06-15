
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { TrashIcon } from "lucide-react"
import { useDeleteCompanyMutation } from "@/redux/features/company-management/companiesApi"

export function DeleteCompanyDialogue({ id }: { id: string }) {
    const [deleteJob] = useDeleteCompanyMutation()
    const handleDelete = async () => {
        const res = await deleteJob({ jobId: id })
        console.log(res);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><TrashIcon /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogTrigger>

                        <Button onClick={handleDelete} variant={'destructive'} type="submit">Delete</Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
