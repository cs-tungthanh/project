import styled from 'styled-components';
import { Button } from 'antd';

export const CustomButton = styled(Button)`
    padding: 0 8px;

    &.ant-btn-primary {
        color: ${props => props.theme.primary.textColor};
        background: ${props => props.theme.primary.backgroundColor};
        border-color: ${props => props.theme.primary.borderColor};
    }

    &.ant-btn-link {
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        border: solid 3px transparent;
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa);
        background-origin: border-box;
        background-clip: content-box, border-box;
        color: #fff;
    }

    &.ant-btn-default {
        color: ${props => props.theme.default.textColor};
        background: ${props => props.theme.default.backgroundColor};
        border-color: ${props => props.theme.default.borderColor};
    }
`;
