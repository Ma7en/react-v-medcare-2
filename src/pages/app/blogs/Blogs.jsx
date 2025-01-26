// components
import BlogsCom from "../../../ui/blogs/BlogsCom";
import Links from "../../../ui/links/LinksCom";

// ui
import Main from "../../../ui/global/Main";

function Blogs() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <BlogsCom />
                <Links />
            </Main>
        </>
    );
}

export default Blogs;
