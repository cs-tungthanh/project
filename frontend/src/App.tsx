import {
    BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { AppRouter } from './constants/routes.contant';

const RouterWrapper = (): JSX.Element => (
    <Router>
        <nav>
            <ul>
                {
                    AppRouter.map((page) => (
                        <li>
                            <Link to={page.path}>{page.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <Switch>
            {
                AppRouter.map((page) => (
                    <Route path={page.path}>
                        {page.component}
                    </Route>
                ))
            }
        </Switch>
    </Router>
);

export default RouterWrapper;
