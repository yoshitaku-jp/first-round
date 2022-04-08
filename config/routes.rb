Rails.application.routes.draw do
  get 'scores/create'
  get 'users/index'
  get 'users/create'
  mount ActionCable.server => '/cable'
  
  root to: 'events#show'
  resources :events
end
