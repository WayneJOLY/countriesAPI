const City=require("./City")
const Country = require("./Country")
const country= require("./Country")


City.belongsTo(Country)
Country.hasMany(City)