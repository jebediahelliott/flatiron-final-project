Rails.application.routes.draw do
  resources :inquiries
  resources :static_pages
  post 'authenticate', to: 'authentication#authenticate'
  get 'current_user', to: 'authentication#current_user'
  resources :dogs
  resources :users
  resources :paragraphs, only: :destroy
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
