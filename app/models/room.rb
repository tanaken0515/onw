class Room < ApplicationRecord
  include HasUrlToken

  before_validation :set_url_token

  private

  def set_url_token
    self.url_token ||= self.class.generate_token
  end
end
