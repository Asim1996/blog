import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import JavaScriptBlog from '../components/JavaScriptBlog';
import NodeBlog from '../components/NodeBlog';
import ReactBlog from '../components/ReactBlog';
import MysqlBlog from '../components/MysqlBlog';
import SystemDesignBlog from '../components/SystemDesignBlog';

const AppRouter = () => {
    return (
        <div>
       
                <Switch>
                    <Redirect exact from="/" to="/javascript" />
                    <Route path="/javascript" exact component={JavaScriptBlog} />
                    <Route path="/node" component={NodeBlog} />
                    <Route path="/react" component={ReactBlog} />
                    <Route path="/mysql" component={MysqlBlog} />
                    <Route path="/systemdesign" component={SystemDesignBlog} />
                    {/* <Route component={NotFoundPage} /> */}
                </Switch>
            {/* </BrowserRouter> */}
        </div>
    )

}

export default AppRouter;
