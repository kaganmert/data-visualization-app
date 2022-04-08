import moment from "moment";

function StoragePersister(data) {
  let clientsArr = [];
  let datesArr = [];

  if (!localStorage.getItem("activeSubscriptions")) {
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  } else {
    datesArr = JSON.parse(localStorage.getItem("dates"));
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    clientsArr = JSON.parse(localStorage.getItem("activeSubscriptions"));
    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  }
  return;
}

export default StoragePersister;
