class UsersController < ApplicationController
  def index
  end

  def show
    @event_id = params[:event_uuid]
  end

  def create
  end
end
