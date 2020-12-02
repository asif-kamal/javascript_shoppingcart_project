class Api::V1::ItemsController < ApplicationController

    def index
        if params[:category_id] 
            @items = Item.where(category_id: params[:category_id])
            render json: @items
        else 
        @items = Item.all
        render json: @items
        end
    end

    def show
        @item = Item.find(params[:id])
        render json: @item
    end

    def create
        @item = Item.create(item_params)
        render json: @item
    end

    private

    def item_params
        params.require(:item).permit(:name, :image, :price, :category_id)
    end

end
