class ParagraphsController < ApplicationController

  def destroy
    @paragraph = Paragraph.find(params[:id])
    @paragraph.destroy
  end
end
