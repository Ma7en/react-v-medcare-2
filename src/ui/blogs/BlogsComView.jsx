import Footer from "../footer/Footer";
import Header from "../header/Header";
import LinksCom from "../links/LinksCom";
import BlogsCom from "./BlogsCom";

function BlogsComView() {
    return (
        <>
            <Header />
            <BlogsCom />
            <LinksCom />
            <Footer />
        </>
    );
}

export default BlogsComView;
