function nonflexClassTime(){
  return [
    {"sHour":8,"sMin":0,"eHour":9,"eMin":10, "name":"Period 1", "Lunch":false}, 
    {"sHour":9,"sMin":13,"eHour":10,"eMin":19, "name":"Period 2", "Lunch":false},
    {"sHour":10,"sMin":23,"eHour":11,"eMin":28, "name":"Period 3", "Lunch":false},
    {"sHour":11,"sMin":32,"eHour":13,"eMin":16, "name":"Period 4", "Lunch":
      [
        {"sMin":32, "sHour":11, "eHour":11, "eMin":"52", "name":"First Lunch"},
        {"sMin":0, "sHour":12, "eHour":12, "eMin":"20", "name":"Second Lunch"},
        {"sMin":28, "sHour":12, "eHour":12, "eMin":"48", "name":"Third Lunch"},
        {"sMin":56, "sHour":12, "eHour":13, "eMin":"16", "name":"Fourth Lunch"},
        {"sMin":26, "sHour":13, "eHour":13, "eMin":"26", "name":"END"},
      ]
    },
    {"sHour":13,"sMin":20,"eHour":14,"eMin":25, "name":"Period 5", "Lunch":false},
    {"sHour":8,"sMin":0,"eHour":9,"eMin":0, "name":"Period 1", "Lunch":false}
         ];//for the next day
}

function flexClassTime(){
  return [
    {"sHour":8,"sMin":0,"eHour":9,"eMin":0, "name":"Period 1", "Lunch":false}, 
    {"sHour":9,"sMin":4,"eHour":10,"eMin":0, "name":"Period 2", "Lunch":false},
    {"sHour":10,"sMin":0,"eHour":10,"eMin":44, "name":"Flex Block", "Lunch":false},
    {"sHour":10,"sMin":48,"eHour":11,"eMin":43, "name":"Period 3", "Lunch":false},
    {"sHour":11,"sMin":47,"eHour":13,"eMin":26, "name":"Period 4", "Lunch":
      [
        {"sMin":47, "sHour":11, "eHour":12, "eMin":"07", "name":"First Lunch"},
        {"sMin":13, "sHour":12, "eHour":12, "eMin":"33", "name":"Second Lunch"},
        {"sMin":40, "sHour":12, "eHour":13, "eMin":"0", "name":"Third Lunch"},
        {"sMin":06, "sHour":13, "eHour":13, "eMin":"26", "name":"Fourth Lunch"},
        {"sMin":26, "sHour":13, "eHour":13, "eMin":"26", "name":"END"},
      ]
    },
    {"sHour":13,"sMin":30,"eHour":14,"eMin":25, "name":"Period 5", "Lunch":false},
    {"sHour":8,"sMin":0,"eHour":9,"eMin":10, "name":"Period 1", "Lunch":false}
         ];//for the next day
}