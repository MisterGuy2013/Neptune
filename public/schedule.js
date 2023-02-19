function nonflexClassTime(){
  return [
    {"sHour":8,"sMin":0,"eHour":9,"eMin":10, "name":"Period 1"}, 
    {"sHour":9,"sMin":13,"eHour":10,"eMin":19, "name":"Period 2"},
    {"sHour":10,"sMin":23,"eHour":11,"eMin":28, "name":"Period 3"},
    {"sHour":11,"sMin":32,"eHour":13,"eMin":16, "name":"Period 4"},
    {"sHour":13,"sMin":20,"eHour":14,"eMin":25, "name":"Period 5"},
    {"sHour":8,"sMin":0,"eHour":9,"eMin":0, "name":"Period 1"}
         ];//for the next day
}

function flexClassTime(){
  return [
    {"sHour":8,"sMin":0,"eHour":9,"eMin":0, "name":"Period 1"}, 
    {"sHour":9,"sMin":4,"eHour":10,"eMin":0, "name":"Period 2"},
    {"sHour":10,"sMin":0,"eHour":10,"eMin":44, "name":"Flex Block"},
    {"sHour":10,"sMin":48,"eHour":11,"eMin":43, "name":"Period 3"},
    {"sHour":11,"sMin":47,"eHour":13,"eMin":26, "name":"Period 4"},
    {"sHour":13,"sMin":30,"eHour":14,"eMin":25, "name":"Period 5"},
    {"sHour":8,"sMin":0,"eHour":9,"eMin":10, "name":"Period 1"}
         ];//for the next day
}