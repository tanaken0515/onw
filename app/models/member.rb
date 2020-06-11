class Member < ApplicationRecord
  belongs_to :room

  validates :check_in_code, presence: true
  validates :check_in_code, uniqueness: { scope: :room }
  validates :name, presence: true
end
