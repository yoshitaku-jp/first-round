class UsersController < ApplicationController
  def index
    @event_id = params[:event_uuid]
  end

  def show
    @event_id = params[:event_uuid]
    @user_name = params[:user_name]
    @user_id = params[:user_id]
  end

  def new
    @event_id = params[:event_uuid]
  end

  def create
    redirect_to event_user_url(event_uuid: params[:event_uuid], user_id: SecureRandom.urlsafe_base64(10), user_name: params[:user_name])
  end
end
