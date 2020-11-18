import React from 'react';
import SearchBar from "./SearchBar";
import { Card, CardHeader, CardLink } from "shards-react";
import check from "../assets/check.png";

const RSideBar = () => {
    return ( 
        <div>
             <SearchBar />
            <br />
            <Card
              className="trending fixed-top"
              style={{
                maxWidth: "300px",
                position: "relative",
                zIndex: "-1",
                color: "#000",
              }}
            >
              <CardHeader>Trending Posts</CardHeader>
              <CardLink>
                <div className="container">
                  <p>
                    <a href="/posts/3">
                      Token-based authentication{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/6">
                      Authentication jwt{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/9">
                      How to learn programming{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/10">
                      How to become a Software Engineer | Full Stack Developer
                      Roadmap 2020{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/11">
                      Top 5 Programming Languages to Learn in 2020 to Get a Job
                      Without a College Degree{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                </div>
              </CardLink>
            </Card>
            <br />
            <div className="sidebar-footer">
              <ul>
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Contacts</li>
              </ul>
            </div>
        </div>
     );
}
 
export default RSideBar;