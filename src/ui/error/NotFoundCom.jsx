import { useNavigate } from "react-router-dom";
import BackButton from "../global/BackButton";
import Button from "../global/Button";
import Heading from "../global/Heading";
import styled from "styled-components";

const StyledBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

function NotFoundCom() {
    const navigate = useNavigate();

    return (
        <>
            <div className="notfound">
                <div className="container">
                    <section>
                        <div>
                            <Heading as="h3">Page not found 😢</Heading>

                            <StyledBtns>
                                <BackButton />

                                <Button onClick={() => navigate("/home")}>
                                    Back Home
                                </Button>
                            </StyledBtns>
                        </div>
                        <div>
                            <img
                                src="/public/images/error/doctor-woman-400px-2.png"
                                alt=""
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default NotFoundCom;
