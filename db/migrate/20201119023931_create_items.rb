class CreateApiV1Items < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_items do |t|
      t.string :name
      t.string :price
      
      t.references :shopping_cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
