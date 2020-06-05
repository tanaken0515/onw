Rails.application.routes.draw do
  resources :rooms, param: :url_token

  root to: 'rooms#new'
end
