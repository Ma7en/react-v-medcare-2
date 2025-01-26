import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlog } from "../../services/apiBlogs";

export function useBlog() {
    const { blogId } = useParams();

    const {
        isLoading,
        data: blog,
        error,
    } = useQuery({
        queryKey: ["blog", blogId],
        queryFn: () => getBlog(blogId),
        retry: false,
    });

    return { isLoading, error, blog };
}
