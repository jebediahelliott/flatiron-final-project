Rails.application.routes.draw do
  resources :static_pages
  post 'authenticate', to: 'authentication#authenticate'
  resources :dogs
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
