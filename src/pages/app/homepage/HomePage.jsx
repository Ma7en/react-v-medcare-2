// components
import Landing from "../../../ui/landing/Landing";
import IconsCom from "../../../ui/icons/IconsCom";
import ServicesCom from "../../../ui/services/ServicesCom";
import AboutCom from "../../../ui/about/AboutCom";
import DoctorsCom from "../../../ui/doctors/DoctorsCom";
import BookCom from "../../../ui/book/BookCom";
import ReviewsCom from "../../../ui/reviews/ReviewsCom";
import BlogsCom from "../../../ui/blogs/BlogsCom";
import LinksCom from "../../../ui/links/LinksCom";

function HomePage() {
    // const navigate = useNavigate();

    return (
        <>
            <Landing />
            <IconsCom />
            <ServicesCom />
            <AboutCom />
            <DoctorsCom />
            <BookCom />
            <ReviewsCom />
            <BlogsCom />
            <LinksCom />
        </>
    );
}
export default HomePage;
