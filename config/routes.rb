Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  root to: 'events#show'
  resources :events do
    resources :users do
      resources :scores
    end
  end
end
