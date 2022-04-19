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
            const user_info = data["user_info"];
            results.insertAdjacentHTML(
              "beforeend",
              `<div class="result flex flex-col items-center mb-10">
                <div class="mb-4">
                  <input class='score invisible border rounded-lg py-2 px-4 mx-4' value="${user_info["score"]}" readonly="readonly" />
                </div>
                <div>
                  <p class='py-2 px-4 mx-4'/>${user_info["user_name"]}</p>
                </div>
              </div>`
            );
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
    user_speak(type, user_info, event_id) {
      return this.perform("user_speak", {
        type: type,
        user_info: user_info,
        event_id: event_id,
      });
    },
    clear_score(type, event_id) {
      return this.perform("clear_score", {
        type: type,
        message: "スコアを入力してください",
        event_id: event_id,
      });
    },
  }
);

export default user_channel;
