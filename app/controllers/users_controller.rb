class UsersController < ApplicationController
  def index
  end

  def show
    @event_id = params[:id]
  end

  def create
  end
end
