class ChangeRoomsUrlTokenRestriction < ActiveRecord::Migration[6.0]
  def change
    change_column_null :rooms, :url_token, false
  end
end
