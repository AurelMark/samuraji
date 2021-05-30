import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Settings from "./pages/Settings";
import Article from "./components/Article";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Navbar />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 800 }}
          >
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/news" component={News} />
              <Route exact path="/news/:id" component={Article} />
              <Route exact path="/settings" component={Settings} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Anton Musiienko 1 TKR © 2021
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
