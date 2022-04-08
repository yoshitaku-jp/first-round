Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  root to: 'events#show'
  get 'events/show'
end
