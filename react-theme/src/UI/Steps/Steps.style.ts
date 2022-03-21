import styled from 'styled-components';
import { Steps } from 'antd';

export const CustomSteps = styled(Steps)`
    .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
        color: ${props => props.theme.primary.backgroundColor};
    }

    .ant-steps-item-finish .ant-steps-item-icon {
        border-color: ${props => props.theme.primary.borderColor};
    }

    .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
        background: ${props => props.theme.primary.backgroundColor};
        border-color: ${props => props.theme.primary.borderColor};
    }

    .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
        stroke: ${props => props.theme.primary.backgroundColor};
    }

    .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
        background-color: ${props => props.theme.primary.backgroundColor};
    }
`;
