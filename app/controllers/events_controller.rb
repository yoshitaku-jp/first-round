class EventsController < ApplicationController
  def show
    @event_id = params[:id]
  end
end
