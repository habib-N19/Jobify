
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
import { useDeleteJobMutation } from "@/redux/features/jobs/jobsApi"

export function DeleteJobDialogue({ id }: { id: string }) {
    const [deleteJob] = useDeleteJobMutation()
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
                    <DialogTitle>Delete Job </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this job?

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
