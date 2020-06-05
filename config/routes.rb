Rails.application.routes.draw do
  resources :rooms, param: :url_token do
    scope module: :rooms do
      resources :members, only: [:create]
    end
  end

  root to: 'rooms#new'
end
