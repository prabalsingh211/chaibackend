require("dotenv").config();
const express = require("express");
//import  express  from 'express'
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const gitHubData = {
  login: "prabalsingh211",
  id: 169626201,
  node_id: "U_kgDOChxKWQ",
  avatar_url: "https://avatars.githubusercontent.com/u/169626201?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/prabalsingh211",
  html_url: "https://github.com/prabalsingh211",
  followers_url: "https://api.github.com/users/prabalsingh211/followers",
  following_url:
    "https://api.github.com/users/prabalsingh211/following{/other_user}",
  gists_url: "https://api.github.com/users/prabalsingh211/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/prabalsingh211/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/prabalsingh211/subscriptions",
  organizations_url: "https://api.github.com/users/prabalsingh211/orgs",
  repos_url: "https://api.github.com/users/prabalsingh211/repos",
  events_url: "https://api.github.com/users/prabalsingh211/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/prabalsingh211/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-05-13T01:23:00Z",
  updated_at: "2024-05-13T02:41:33Z",
};

app.get("/twitter", (req, res) => {
  res.send("thakur_prabalsingh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/github", (req, res) => {
  res.json(gitHubData);
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
