class EventChannel < ApplicationCable::Channel
  def subscribed
    stream_from "event_channel_#{params['event_id']}"
  end

  def unsubscribed
  end

  def user_speak(data)
    ActionCable.server.broadcast("event_channel_#{params['event_id']}", { message: data['message'], type: data['type']  })
  end

  def clear_score(data)
    ActionCable.server.broadcast("event_channel_#{params['event_id']}", { message: data['message'], type: data['type']  })
  end
end
