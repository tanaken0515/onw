module SessionsHelper
  def check_in(member)
    session[:member_id] = member.id
    @current_member = member
  end

  def current_member
    @current_member ||= Member.find_by(id: session[:member_id])
  end

  def checked_in?(room)
    current_member.present? && current_member.room_id == room.id
  end

  def check_out
    @current_member = nil
    session.delete(:member_id)
  end
end
