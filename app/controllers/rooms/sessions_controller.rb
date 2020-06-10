module Rooms
  class SessionsController < ApplicationController
    before_action :set_room

    def create
      if checked_in?(@room)
        return redirect_to room_path(@room), notice: 'You have already checked in.'
      end

      member = @room.members.find_by(member_params)
      if member
        check_in(member)
        redirect_to room_path(@room), notice: 'You have successfully checked in.'
      else
        redirect_to room_path(@room), notice: 'No member was found with that check-in code.'
      end
    end

    def destroy
      check_out
      redirect_to room_path(@room), notice: 'You have checked out.'
    end

    private

    def set_room
      @room = Room.find_by(url_token: params[:room_url_token])
      raise ActiveRecord::RecordNotFound if @room.nil?
    end

    def member_params
      params.require(:member).permit(:check_in_code)
    end
  end
end
