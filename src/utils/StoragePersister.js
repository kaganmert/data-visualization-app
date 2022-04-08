import moment from "moment";

function StoragePersister(data) {
  let datesArr = [];
  let clientsArr = [];
  let connectedArr = [];
  let disconnectedArr = [];
  let packetReceivedArr = [];
  let packetSentArr = [];

  if (!localStorage.getItem("dates")) {
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    connectedArr.push(data.connected);
    localStorage.setItem("connected", JSON.stringify(connectedArr));

    disconnectedArr.push(data.disconnected);
    localStorage.setItem("disconnected", JSON.stringify(disconnectedArr));

    packetReceivedArr.push(data.packetReceived);
    localStorage.setItem("packetReceived", JSON.stringify(packetReceivedArr));

    packetSentArr.push(data.packetSent);
    localStorage.setItem("packetSent", JSON.stringify(packetSentArr));

    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  } else {
    datesArr = JSON.parse(localStorage.getItem("dates"));
    datesArr.push(moment().format("hh:mm:ss"));
    localStorage.setItem("dates", JSON.stringify(datesArr));

    connectedArr = JSON.parse(localStorage.getItem("connected"));
    connectedArr.push(data.connected);
    localStorage.setItem("connected", JSON.stringify(connectedArr));

    disconnectedArr = JSON.parse(localStorage.getItem("disconnected"));
    disconnectedArr.push(data.disconnected);
    localStorage.setItem("disconnected", JSON.stringify(disconnectedArr));

    packetReceivedArr = JSON.parse(localStorage.getItem("packetReceived"));
    packetReceivedArr.push(data.packetReceived);
    localStorage.setItem("packetReceived", JSON.stringify(packetReceivedArr));

    packetSentArr = JSON.parse(localStorage.getItem("packetSent"));
    packetSentArr.push(data.packetSent);
    localStorage.setItem("packetSent", JSON.stringify(packetSentArr));

    clientsArr = JSON.parse(localStorage.getItem("activeSubscriptions"));
    clientsArr.push(data.activeSubscriptions);
    localStorage.setItem("activeSubscriptions", JSON.stringify(clientsArr));
  }
  return;
}

export default StoragePersister;
