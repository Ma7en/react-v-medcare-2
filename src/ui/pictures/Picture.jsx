/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledImage = styled.div`
    flex: 1 1 45rem;
    img {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    figcaption {
        visibility: hidden;
    }
`;

function Picture({ src, alt, caption }) {
    return (
        <>
            <StyledImage>
                <picture>
                    <figure>
                        <img
                            src={`${src}`}
                            alt={`${alt || caption || ""} - ${caption || ""}`}
                        />
                        {caption && <figcaption>{caption}</figcaption>}
                    </figure>
                    {/* 
                    عندما تريد وضع صورة في الموقع وتريد ان تَكتب جُملة توضيحية أسفل هذه الصورة ف الطريقة الصحيحة هي استخدام هؤلاء العناصر الثلاثة معاَ.
                    */}
                </picture>
            </StyledImage>
        </>
    );
}

export default Picture;
