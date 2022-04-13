class EventsController < ApplicationController
  def show
    @event_id = params[:uuid]
  end

  def new
    uuid = SecureRandom.uuid
    @uuid_url = request.protocol + request.host + '/events/' + uuid
  end
end
