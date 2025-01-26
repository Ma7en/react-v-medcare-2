import BackButton from "../global/BackButton";
import Heading from "../global/Heading";

function EditCom() {
    return (
        <>
            <div className="notfound">
                <div className="container">
                    <section>
                        <div>
                            <Heading as="h3">
                                This page is currently under construction😢
                            </Heading>
                            <div>
                                <BackButton />
                            </div>
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

export default EditCom;
