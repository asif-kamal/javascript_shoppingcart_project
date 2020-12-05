class AddCategoryRefToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :category, null: false, foreign_key: true, :default => 2
  end
end
