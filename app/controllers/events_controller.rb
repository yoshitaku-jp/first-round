class EventsController < ApplicationController
  def show
    @event_id = params[:uuid]
  end

  def new
    @uuid_url = ''
    if ! params[:uuid_url].nil?
      @uuid_url = params[:uuid_url]
     end
  end

  def create
    @uuid_url = request.protocol + request.host + '/events/' + SecureRandom.uuid
    redirect_to new_event_url(uuid_url: @uuid_url)
  end

end
