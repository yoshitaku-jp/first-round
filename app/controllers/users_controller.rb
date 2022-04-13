class UsersController < ApplicationController
  def index
  end

  def show
    @event_id = params[:event_uuid]
    @user_name = params[:user_name]
  end

  def new
    @event_id = params[:event_uuid]
  end

  def create
    p 'create'
    p params
    p params[:user_name]
    p params[:uuid]
    redirect_to event_user_url(event_uuid: params[:event_uuid],user_name: params[:user_name])
  end
end
