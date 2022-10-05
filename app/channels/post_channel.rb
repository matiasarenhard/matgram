class PostChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'post_channel'
  end

  def unsubscribed; end
end
