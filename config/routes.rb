Rails.application.routes.draw do
  root to: 'events#show'
  get 'events/show'
end
