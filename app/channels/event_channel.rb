class EventChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'event_channel'
  end

  def unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast('event_channel', {message: data['message']})
  end
end
