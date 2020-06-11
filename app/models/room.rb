class Room < ApplicationRecord
  include HasUrlToken

  has_many :members

  before_validation :set_url_token

  def to_param
    url_token
  end

  private

  def set_url_token
    self.url_token ||= self.class.generate_token
  end
end
