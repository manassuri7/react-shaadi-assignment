import styled from 'styled-components';
import {UserCircle} from 'styled-icons/fa-regular/UserCircle';
import {SignOutAlt} from 'styled-icons/fa-solid/SignOutAlt';
import {NavbarLink} from 'styled-bootstrap-components';

export const Img = styled.img`

    height: 20px;
    margin-top: -9px;
    margin-right: 2px;

`;

export const UserCircleIcon = styled(UserCircle)`

    height: 20px;

`;

export const SignOutLogo = styled(SignOutAlt)`
    color: orangered;
    width: 20px;
`;

export const NavbarLinkColorBlack = styled(NavbarLink)`
    color: black;
`;
