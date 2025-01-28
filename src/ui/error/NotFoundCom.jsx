import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// ui
import BackButton from "../global/BackButton";
import Button from "../global/Button";
import Heading from "../global/Heading";

// assets
import imagenotfound from "../../assets/images/error/doctor-woman-400px-2.png";

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

                                <Button
                                    onClick={() => {
                                        navigate("/home");
                                    }}
                                >
                                    Back Home
                                </Button>
                            </StyledBtns>
                        </div>

                        <div>
                            <img
                                src={`${imagenotfound}`}
                                alt={`page not found`}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default NotFoundCom;
