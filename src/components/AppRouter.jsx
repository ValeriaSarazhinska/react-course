import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {routes} from "../router/router/router.index";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    element={route.component}
                    path={route.path}
                    exacte={route.exact}
                />
            )}
            <Route path={"/*"} element={<Posts to={"/posts"} replace/>}/>
        </Routes>
    );
};

export default AppRouter;