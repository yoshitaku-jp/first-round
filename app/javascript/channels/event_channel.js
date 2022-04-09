import consumer from "channels/consumer";
const messages = document.getElementById("messages");

const user_channel = consumer.subscriptions.create(
  { channel: "EventChannel", event_id: messages.dataset.event_id },
  {
    connected() {},

    disconnected() {},

    received(data) {
      switch (data.type) {
        case "create":
          const results = document.getElementById("results");
          if (results != null) {
            results.insertAdjacentHTML("beforeend", data["message"]);
          }
          break;
        case "delete":
          const text_score = document.getElementById("text_score");
          if (text_score != null) {
            text_score.value = data.message;
          }
          break;
      }
    },
    user_speak(message, type, event_id) {
      return this.perform("user_speak", {
        message: message,
        type: type,
        event_id: event_id,
      });
    },
    clear_score(type, event_id) {
      return this.perform("clear_score", {
        message: "スコアを入力してください",
        type: type,
        event_id: event_id,
      });
    },
  }
);

export default user_channel;
