class CommentChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'comment_channel'
  end

  def unsubscribed; end
end
