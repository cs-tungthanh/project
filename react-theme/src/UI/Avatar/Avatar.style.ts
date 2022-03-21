import styled from 'styled-components';
import { Avatar } from 'antd';

export const CustomAvatar = styled(Avatar)`
    background-color: ${props => props.theme.primary.backgroundColor};
`;
