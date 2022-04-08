import consumer from "channels/consumer";
const messages = document.getElementById("messages");

const appRoom = consumer.subscriptions.create(
  { channel: "EventChannel", event_id: messages.dataset.event_id },
  {
    connected() {},

    disconnected() {},

    received(data) {
      const messages = document.getElementById("messages");

      messages.insertAdjacentHTML("beforeend", data["message"]);
    },

    speak: function (message, event_id) {
      return this.perform("speak", { message: message, event_id: event_id });
    },
  }
);

window.document.onkeydown = function (event) {
  if (event.key == "Enter") {
    appRoom.speak(event.target.value);
    event.target.value = "";
    event.preventDefault();
  }
};
