import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HeaderBlock, AddForm, FullPost, NotFound } from 'components/index';
import { PostsList } from 'modules';

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderBlock
                    title="Заголовок сайта"
                    description="описание"
                    imageUrl="https://img5.goodfon.ru/wallpaper/nbig/8/9c/abstraktsiia-fon-kartinka-sinii-goluboi-smeshenie-tsvetov-kr.jpg"
                />
                <div className="container">
                    <div className="content">
                        {/* <button type="button" className="btn btn-primary">
                            Add posts
                        </button> */}
                        <div className="content">


                            {/* <AddForm /> */}
                            <Router>
                                <div>
                                    <Switch>
                                        <Route
                                            path="/"
                                            exact
                                            component={() => <PostsList />} />
                                        <Route
                                            path="/post/:id"
                                            exact
                                            component={() => (
                                                <FullPost
                                                    createdAt={'' + new Date()}
                                                />
                                            )} />
                                        <Route
                                            path="/post/:id/edit"
                                            exact
                                            component={AddForm} />
                                        <Route path="*" component={NotFound} />
                                    </Switch>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;