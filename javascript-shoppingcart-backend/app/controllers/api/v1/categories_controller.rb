class Api::V1::CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, include: [:items]
    end


    def create
        @category = Category.create(category_params)
        render json: @category
    end

    

    private

    def category_params
        params.require(:category).permit(:name)
    end
end
