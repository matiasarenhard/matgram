module ApplicationHelper
  def embedded_svg(path)
    File.open("app/assets/images/#{path}", 'rb') { |file| raw(file.read) }
  end

  def user_avatar(_user)
    # avatar = if user.avatar.attached?
    #           user.avatar.variant(resize_to_fill: [100, 100])
    #         else
    #           'default-avatar.jpg'
    #         end
    #
    # image_tag avatar, class: 'photo'
    image_tag 'default-avatar.jpg', class: 'photo'
  end
end
