class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :image
      t.string :system
      t.string :players
      t.text :description

      t.timestamps
    end
  end
end
