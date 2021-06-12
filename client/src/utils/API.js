import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
  getContributors: function (contributorsIds) {
    return axios.get("/api/users/contributors/" + contributorsIds);
  },
  getContributions: function (id) {
    return axios.get("/api/contribution/" + id);
  },
  deleteContribution: function (id) {
    return axios.delete("/api/contribution/" + id);
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Converts city to Lat and Lng coordinates 
  convert: function (city) {
    return axios.get(BASEURL + city + APIKEY)
  },
  //Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },
  getProjects: function () {
    return axios.get("/api/projects");
  },
  getProjectsForUser: function (userId) {
    return axios.get("/api/projects/user/" + userId);
  },
  getContributedProjectsForUser: function (userId) {
    return axios.get("/api/projects/usercontributed/" + userId);
  },
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  updateProject: function (id, data) {
    return axios.put("/api/projects/" + id, data);
  },
  setProjectStatus: function (id, status) {
    return axios.put("/api/projects/status/" + id, { status: status });
  },
  addProjectContribution: function (id, contribution) {
    return axios.put("/api/projects/contributions/" + id, contribution);
  },
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  searchByLocation: function (lat, lng, dist) {
    return axios.get(`/api/projects/location/${lat}/${lng}/${dist}`);
  },
  saveContribution: function (ContributionData) {
    return axios.post("/api/contribution", ContributionData);
  },
  // check user for unique name
  doesUsernameExist: function (username) {
    return axios.head(`/api/users/${username}`);
  },
  getCountries: function () {
    return axios.get("https://countriesnow.space/api/v0.1/countries/info?returns=name");
  },
  getCitiesForCountry: function (country) {
    return axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: country });
  },
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  login: function (emailAddress, password) {
    return axios.post("/api/users/login", { emailAddress: emailAddress, password: password });
  },
  logout: function () {

  }
};
