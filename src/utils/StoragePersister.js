import moment from "moment";

function StoragePersister(data) {
  let datesArr = [];
  let clientsArr = [];
  let connectedArr = [];
  let disconnectedArr = [];
  console.log(data.disconnected);

  if (!localStorage.getItem("dates")) {
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    connectedArr.push(data.connected);
    localStorage.setItem("connected", JSON.stringify(connectedArr));

    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  } else {
    datesArr = JSON.parse(localStorage.getItem("dates"));
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    connectedArr = JSON.parse(localStorage.getItem("connected"));
    connectedArr.push(data.connected);
    localStorage.setItem("connected", JSON.stringify(connectedArr));

    clientsArr = JSON.parse(localStorage.getItem("activeSubscriptions"));
    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  }
  return;
}

export default StoragePersister;
