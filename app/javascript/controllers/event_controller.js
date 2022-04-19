import { Controller } from "@hotwired/stimulus";
import event_channel from "../channels/event_channel";

export default class extends Controller {
  static targets = ["text_score", "user_name", "total_score"];

  connect() {
    this.channel = event_channel;
  }

  send_score() {
    const type = "create";

    const user_info = {};
    user_info.score = this.text_scoreTarget.value;
    user_info.user_name = this.user_nameTarget.value;

    this.channel.user_speak(type, user_info);
  }
  clear_score() {
    const type = "delete";

    this.channel.clear_score(type);
  }

  sum_score(elements) {
    let total_score = 0;
    for (let i = 0; i < elements.length; i++) {
      total_score = total_score + Number(elements.item(i).value);
    }
    this.total_scoreTarget.value = total_score;
  }
}
