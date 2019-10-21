import axios from "axios";

export default {
  // Gets all pets
  getPets: function() {
    return axios.get("/api/pets/");
  },
  // Gets the pet with the given id
  getPet: function(id) {
    return axios.get("/api/pets/" + id);
  },
  //Gets a single pet by name
  getOnePet: function (name) {
    return axios.get("/api/pets/" + name);
  },
  // Deletes the pet with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a pet to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Gets a single user by name
  getOneUser: function (name) {
    return axios.get("/api/users/" + name);
  },
  //Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
};