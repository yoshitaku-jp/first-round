Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root to: 'home#index'
  
  get 'home/index'
  resources :events, param: :uuid do
    resources :users, param: :user_id do
      resources :scores
    end
  end
end
