const data = new Date();
const h1 = document.querySelector(".container h1");

const getDayName = (weekDay) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[weekDay];
};
const getMonthName = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];
  return months[monthNumber];
};
const dateWithoutZero = (num) => {
  return num >= 10 ? num : `0${num}`;
};
const createDate = (data) => {
  const weekDay = data.getDay();
  const monthNumber = data.getMonth();

  const dayName = getDayName(weekDay);
  const monthName = getMonthName(monthNumber);

  return ` ${dayName}, ${monthName}/${data.getDate()}/${data.getFullYear()} : ${dateWithoutZero(
    data.getHours()
  )}:${dateWithoutZero(data.getMinutes())}
    `;
};
h1.innerHTML = createDate(data);
// ---------------------------------------------------------------------------------------------
// -------------------------------OPÇÃO MAIS SIMPLES E MAIS CURTA-------------------------------
// ---------------------------------------------------------------------------------------------
// const h1 = document.querySelector(".container h1");
// const data = new Date();
// h1.innerHTML = data.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// });
