Rails.application.routes.draw do
  resources :rooms, param: :url_token do
    scope module: :rooms do
      resources :members, only: [:create]
      post 're-entry', to: 'sessions#create', as: :re_entry
      delete 'check-out', to: 'sessions#destroy', as: :check_out
    end
  end

  root to: 'rooms#new'
end
