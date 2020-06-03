class AddUrlTokenToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :url_token, :string, limit: 30
  end
end
