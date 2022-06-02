import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useState } from "react";

export const App = () => {
  const [view, setview] = useState("");
  const [adminview, setadminView] = useState(false);
  const [userview, setUserView] = useState(false);
  return <div>hello</div>;

  const setAdminView = () => {
    // this.setState({ admin: true });
    setview("admin");
    // this.setState({ view: "allbooks" });
  };

  const userView = () => {
    // this.setState({ user: true });
    // this.setState({ view: "allbooks" });
  };

  const changeView = (option) => {
    setview(option);
  };

  // renderView() {
  //   const { view } = this.state;

  //   if (view === "Allfilms") {
  //     return (
  //       <Allfilms Films={this.state.allfilms} adminState={this.state.admin} />
  //     );
  //   } else if (view === "login") {
  //     return (
  //       <Login setAdminView={this.setAdminView} setUserView={this.userView} />
  //     );
  //   } else if (view === "create-account") {
  //     return <Signup></Signup>;
  //   } else if (view === "create-film") {
  //     return <Create />;
  //   } else if (view === "result-search") {
  //     return <SearchedFilm film={this.state.allfilms}></SearchedFilm>;
  //   }
  // }

  //     <div className="main">{this.renderView()}</div>
  //   </div>
  // );
};

ReactDOM.render(<App />, document.getElementById("main"));
