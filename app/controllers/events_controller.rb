class EventsController < ApplicationController
  def show
    @event_id = params[:uuid]
  end
  end
end
