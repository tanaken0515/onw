class AddIndexMembersRoomIdAndCheckInCode < ActiveRecord::Migration[6.0]
  def change
    add_index :members, %i[room_id check_in_code], unique: true
  end
end
