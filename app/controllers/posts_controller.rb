class PostsController < ApplicationController
  before_action :set_post, only: %i[show]

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show; end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params.merge(created_by: current_user))

    if @post.save
      redirect_to post_url(@post), notice: 'Post foi criado com sucesso'
    else
      flash.now[:alert] = @post.errors.full_messages.to_sentenc
      render :new
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:photo, :description)
  end
end
