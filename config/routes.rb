Rails.application.routes.draw do
  resources :shopping_carts
  resources :items
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
