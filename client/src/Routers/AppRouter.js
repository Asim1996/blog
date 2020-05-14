import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import JavaScriptBlog from '../components/JavaScriptBlog';
import NodeBlog from '../components/NodeBlog';
import ReactBlog from '../components/ReactBlog';
import AwsBlog from '../components/Aws';
import SystemDesignBlog from '../components/SystemDesignBlog';
import BlogContent from "../components/BlogContent";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
    return (
        <div>
               <Switch>
                    <Redirect exact from="/" to="/javascript" />
                    <Route path="/javascript" exact component={JavaScriptBlog} />
                    <Route path="/javascript/:blog_id/:blog_title" exact component={BlogContent} />
                    <Route path="/node" exact component={NodeBlog} />
                    <Route path="/node/:blog_id/:blog_title" exact component={BlogContent} />
                    <Route path="/react" exact component={ReactBlog} />
                    <Route path="/react/:blog_id/:blog_title" exact component={BlogContent} />
                    <Route path="/aws" exact component={AwsBlog} />
                    <Route path="/aws/:blog_id/:blog_title" exact component={BlogContent} />
                    <Route path="/systemdesign" exact component={SystemDesignBlog} />
                    <Route path="/systemdesign/:blog_id/:blog_title" exact component={BlogContent} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
    )

}

export default AppRouter;
