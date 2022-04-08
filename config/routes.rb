Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  root to: 'events#show'
  resources :events
end
