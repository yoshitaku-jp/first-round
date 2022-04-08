import consumer from "channels/consumer";

const appRoom = consumer.subscriptions.create("EventChannel", {
  connected() {},

  disconnected() {},

  received(data) {
    console.log(data);

    return alert(data["message"]);
  },

  speak: function (message) {
    return this.perform("speak", { message: message });
  },
});

window.document.onkeydown = function (event) {
  if (event.key == "Enter") {
    appRoom.speak(event.target.value);
    event.target.value = "";
    event.preventDefault();
  }
};
