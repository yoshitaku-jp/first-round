import { Controller } from "@hotwired/stimulus";
import event_channel from "../channels/event_channel";

export default class extends Controller {
  static targets = ["text_score", "user_name", "total_score"];

  connect() {
    this.channel = event_channel;
  }

  send_score() {
    const element = this.text_scoreTarget;
    const text_score = element.value;
    const type = "create";

    this.channel.user_speak(text_score, type);
  }
  clear_score() {
    const type = "delete";

    this.channel.clear_score(type);
  }

  sum_score() {
    console.log("sum score start");
    this.total_scoreTarget.value = "100";
    console.log("sum score end");
  }
}
