const { Router } = require("express");
const restaurant = require("../controllers/restaurants.controllers");

const route = Router();

route.get("/restaurants", restaurant.getRestaurants);
route.get("/restaurants/:_id", restaurant.getRestaurantOne);
route.get("/restaurantsbyneighbor/", restaurant.getRestaurantByNeighborHood);

module.exports = route;
