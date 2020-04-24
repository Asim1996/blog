import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import JavaScriptBlog from '../components/JavaScriptBlog';
import NodeBlog from '../components/NodeBlog';
import ReactBlog from '../components/ReactBlog';
import MysqlBlog from '../components/MysqlBlog';
import SystemDesignBlog from '../components/SystemDesignBlog';
import BlogContent from "../components/BlogContent";
const AppRouter = () => {
    return (
        <div>
       
                <Switch>
                    <Redirect exact from="/" to="/javascript" />
                    <Route path="/javascript" exact component={JavaScriptBlog} />
                    <Route path="/javascript/:blog_id" exact component={BlogContent} />
                    <Route path="/node" exact component={NodeBlog} />
                    <Route path="/node/:blog_id" exact component={BlogContent} />
                    <Route path="/node/:blog_id" exact component={JavaScriptBlog} />
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
