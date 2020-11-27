class Api::V1::CategoriesController < ApplicationController

    def create
        @category = Category.create(category_params)
        render json: @category
    end

    private

    def category_params
        params.require(:category).permit(:name)
    end
end
