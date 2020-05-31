Rails.application.routes.draw do
  resources :rooms

  root to: 'rooms#new'
end
