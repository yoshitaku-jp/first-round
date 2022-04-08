class EventChannel < ApplicationCable::Channel
  def subscribed
    stream_from "event_channel_#{params['event_id']}"
  end

  def unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast("event_channel_#{params['event_id']}", {message: data['message']})
  end
end
