function nonflexClassTime() {
  return [
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 03, "name": "Period 1", "Lunch": false },
    { "sHour": 9, "sMin": 07, "eHour": 10, "eMin": 15, "name": "Period 2", "Lunch": false },
    { "sHour": 10, "sMin": 19, "eHour": 11, "eMin": 27, "name": "Period 3", "Lunch": false },
    {
      "sHour": 11, "sMin": 31, "eHour": 13, "eMin": 13, "name": "Period 4", "Lunch":
        [
          { "sMin": 31, "sHour": 11, "eHour": 11, "eMin": 51, "name": "First Lunch" },
          { "sMin": 54, "sHour": 11, "eHour": 12, "eMin": 18, "name": "Second Lunch" },
          { "sMin": 22, "sHour": 12, "eHour": 12, "eMin": 46, "name": "Third Lunch" },
          { "sMin": 49, "sHour": 12, "eHour": 13, "eMin": 13, "name": "Fourth Lunch" },
          { "sMin": 19, "sHour": 13, "eHour": 13, "eMin": 26, "name": "END" },
        ]
    },
    { "sHour": 13, "sMin": 17, "eHour": 14, "eMin": 25, "name": "Period 5", "Lunch": false },
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 00, "name": "Period 1", "Lunch": false }
  ];//for the next day
}

function flexClassTime() {
  return [
    { "sHour": 7, "sMin": 55, "eHour": 8, "eMin": 52, "name": "Period 1", "Lunch": false },
    { "sHour": 8, "sMin": 56, "eHour": 9, "eMin": 53, "name": "Period 2", "Lunch": false },
    { "sHour": 9, "sMin": 53, "eHour": 10, "eMin": 38, "name": "Flex Block", "Lunch": false },
    { "sHour": 10, "sMin": 42, "eHour": 11, "eMin": 39, "name": "Period 3", "Lunch": false },
    {
      "sHour": 11, "sMin": 43, "eHour": 13, "eMin": 24, "name": "Period 4", "Lunch":
        [
          { "sMin": 43, "sHour": 11, "eHour": 12, "eMin": 03, "name": "First Lunch" },
          { "sMin": 10, "sHour": 12, "eHour": 12, "eMin": 30, "name": "Second Lunch" },
          { "sMin": 33, "sHour": 12, "eHour": 12, "eMin": 57, "name": "Third Lunch" },
          { "sMin": 00, "sHour": 13, "eHour": 13, "eMin": 24, "name": "Fourth Lunch" },
          { "sMin": 25, "sHour": 13, "eHour": 13, "eMin": 26, "name": "END" },
        ]
    },
    { "sHour": 13, "sMin": 28, "eHour": 14, "eMin": 25, "name": "Period 5", "Lunch": false },
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 10, "name": "Period 1", "Lunch": false }
  ];//for the next day
}

function halfDayTime() {
  return [
    { "sHour": 7, "sMin": 55, "eHour": 8, "eMin": 41, "name": "Period 1", "Lunch": false },
    { "sHour": 8, "sMin": 45, "eHour": 9, "eMin": 31, "name": "Period 2", "Lunch": false },
    { "sHour": 9, "sMin": 35, "eHour": 10, "eMin": 21, "name": "Period 3", "Lunch": false },
    { "sHour": 10, "sMin": 25, "eHour": 11, "eMin": 11, "name": "Period 4", "Lunch": false },
    { "sHour": 11, "sMin": 15, "eHour": 12, "eMin": 00, "name": "Period 5", "Lunch": false },
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 0, "name": "Period 1", "Lunch": false }
  ];//for the next day
}


function finalsTime() {
  return [
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 30, "name": "Final 1", "Lunch": false },
    { "sHour": 9, "sMin": 30, "eHour": 9, "eMin": 45, "name": "Break", "Lunch": false },
    { "sHour": 9, "sMin": 45, "eHour": 11, "eMin": 20, "name": "Final 2", "Lunch": false },
    { "sHour": 7, "sMin": 55, "eHour": 9, "eMin": 0, "name": "Final 1", "Lunch": false }
  ];//for the next day
}
