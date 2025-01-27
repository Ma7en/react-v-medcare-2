// style
import "./BookPage.scss";

// components
import BookReview from "../../../ui/book/BookReview";
import LinksCom from "../../../ui/links/LinksCom";

// ui
import Main from "../../../ui/global/Main";

function Book() {
    return (
        <>
            <Main type="loginpage" className="loginpage">
                <BookReview />
                <LinksCom />
            </Main>
        </>
    );
}

export default Book;
