class AuthenticationController < ApiController
  skip_before_action :authenticate_request

  # def current_user
  #   @current_user = AuthorizeApiRequest.call(request.headers).result
  #   if @current_user
  #     render json: @current_user
  #   else
  #     render json: {error: 'Invalid Token'}, status: :unauthorized
  #   end
  # end

  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      @user = User.find_by_email(params[:email])
      render json: {auth_token: command.result, user: @user}
    else
      render json: {error: command.errors}, status: :unauthorized
    end
  end

end
