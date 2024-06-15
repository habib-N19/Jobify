import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"
export const PaginationComponent = ({ page, setPage, totalPages }: { page: number, setPage: (page: number) => void, totalPages: number }) => {
    return (
        <Pagination>
            <PaginationContent>
                {page > 1 && (
                    <PaginationPrevious onClick={() => setPage(page - 1)} />
                )}
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            isActive={page === index + 1}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {page < totalPages && (
                    <PaginationNext onClick={() => setPage(page + 1)} />
                )}
            </PaginationContent>
        </Pagination>
    )

}