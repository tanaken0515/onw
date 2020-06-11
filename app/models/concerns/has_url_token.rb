module HasUrlToken
  extend ActiveSupport::Concern

  private

  class_methods do
    def generate_token(n: 12)
      token = ''

      loop do
        token = SecureRandom.urlsafe_base64(n)
        break unless self.exists?(url_token: token)
      end

      token
    end
  end
end
