const img1 = require("./images/product-01.png").default
const img2 = require("./images/product-02.png").default
const img3 = require("./images/product-03.png").default
const img4 = require("./images/product-04.png").default
const img5 = require("./images/product-05.png").default
const img6 = require("./images/product-06.png").default
const img8 = require("./images/product-08.png").default
const img9 = require("./images/product-09.png").default

const popularProducts = [
    {
      id:1,
      img: img1,
      cat:["women"],
      color:["white", "yellow"],
      size: ["s", "m"]
    },
    {
      id:2,
      img:img2,
      cat:["women"],
      color:["white", "yellow", "orange"],
      size: ["s", "m", "xl"]
    },
    {
      id:3,
      img:img3,
      cat:["women"],
      color:["white"],
      size: ["s", "m", "xxl"]
    },
    {
      id:4,
      img:img4,
      cat:["women"],
      color:["yellow", "blue"],
      size: ["s", "l"]
    },
    {
      id:5,
      img:img5,
      cat:["women"],
      color:["white", "pink"],
      size: ["s", "l"]
    },
    {
      id:6,
      img:img6,
      cat:["women"],
      color:["white", "yellow"],
      size: ["s", "m", "l"]
    },
    {
      id:7,
      img:img1,
      cat:["women"],
      color:["yellow"],
      size: ["s", "m", "l", "xl"]
    },
    {
      id:8,
      img:img8,
      cat:["coat"],
      color:["orange", "yellow"],
      size: ["s", "m", "l","xl","xxl"]
    },
    // {
    //   id:9,
    //   img:img9,
    //   cat:["jeans"],
    //   color:["blue"],
    //   size: ["s", "m", "l","xl","xxl"]
    // },
  ]

export default popularProducts