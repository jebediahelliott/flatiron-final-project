class ParagraphsController < ApiController
  skip_before_action :authenticate_request, only: :update

  def update
    @paragraph = Paragraph.find(params[:id])
    if @paragraph.update(paragraph_params)
      render json: @paragraph
    else
      render json: @paragraph.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @paragraph = Paragraph.find(params[:id])
    @paragraph.destroy
  end

  private

  def paragraph_params
    params.require(:paragraph).permit(:content, :static_page_id, :counter)
  end

end
