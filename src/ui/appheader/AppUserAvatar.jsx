import styled from "styled-components";

// import { useUser } from "../../features/authentication/useUser";

// import { useUser } from "./useUser";

// assets
import avataruser from "../../assets/images/user/default-user.jpg";

const StyledAppUserAvatar = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--color-grey-600);
`;

const Avatar = styled.img`
    display: block;
    width: 4rem;
    width: 3.6rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    outline: 2px solid var(--color-grey-100);
`;

function AppUserAvatar() {
    // const { user } = useUser();
    // const { user } = useUser();
    // const { fullName, avatar } = user.user_metadata;
    const { fullName, avatar } = { fullName: "x", avatar: avataruser };

    return (
        <>
            <StyledAppUserAvatar>
                <Avatar
                    src={avatar || "/images/user/default-user.jpg"}
                    alt={`Avatar of ${fullName}`}
                />
                <span>{fullName}</span>
            </StyledAppUserAvatar>
        </>
    );
}

export default AppUserAvatar;
