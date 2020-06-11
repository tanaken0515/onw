module Rooms
  class MembersController < ApplicationController
    before_action :set_room

    def create
      if checked_in?(@room)
        return redirect_to room_path(@room), notice: 'You have already checked in.'
      end

      member = @room.members.build(member_params)
      if member.save
        check_in(member)
        redirect_to room_path(@room), notice: 'You have successfully checked in.'
      else
        message = member.errors.full_messages.join(' / ')
        redirect_to room_path(@room), notice: message
      end
    end

    private

    def set_room
      @room = Room.find_by(url_token: params[:room_url_token])
      raise ActiveRecord::RecordNotFound if @room.nil?
    end

    def member_params
      params.require(:member).permit(:check_in_code, :name)
    end
  end
end
