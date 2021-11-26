import { ThemeProvider } from 'styled-components';
import { Button, Steps, Avatar } from './UI';
import { Space } from 'antd';
import theme from './theme/theme';
import 'antd/dist/antd.css';

const { Step } = Steps;
const App = () => (
    <ThemeProvider theme={theme}>
        <div style={{ padding: 20 }}>
            <Space>
                <Button type="link">
                    Link
                </Button>
                <Button type="primary">
                    Primary
                </Button>
                <Button type="default">
                    Default
                </Button>
            </Space>
            <div style={{ height: 40 }} />
            <Avatar>H</Avatar>
            <div style={{ height: 40 }} />
            <Steps current={1} percent={60}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
    </ThemeProvider>
)

export default App;
