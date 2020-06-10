module RoomsHelper
  def check_in_action_paths(room)
    {
      newcomer: room_members_path(room_url_token: room),
      member: room_re_entry_path(room_url_token: room)
    }.to_json
  end
end
