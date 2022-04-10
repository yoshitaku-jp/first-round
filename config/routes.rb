Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  
  root to: 'events#show'
  resources :events, param: :uuid do
    resources :users, param: :user_name do
      resources :scores
    end
  end
end
