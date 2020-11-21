class Api::V1::ItemsController < ApplicationController

    def index
        @items = Item.all
        render json: @items
    end


    def create
        @item = Api::V1::Item.create(item_params)
        @item.save

        render json: @item 
    end

    def show
        @item = Item.find(params[:id])

        render json: @item 
    end

end
