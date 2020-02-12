import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Analytics from './analytics/Analytics';
import Authentication from './authentication/Authentication';

const DashboardContent: React.FC<{}> = () => {

    return (
        <div className="dashboard-content">
            <Switch >
                <Route
                    path={"/dashboard/analytics"}
                    component={Analytics} />
                <Route
                    path={"/dashboard/authentication"}
                    component={Authentication} />
                <Redirect
                    exact
                    from="/dashboard"
                    to="/dashboard/authentication" />
            </Switch >
        </div>
    );
};

export default DashboardContent;