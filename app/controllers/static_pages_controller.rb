class StaticPagesController < ApplicationController
  before_action :set_static_page, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request, only: [:index]


  # GET /static_pages
  def index
    @static_pages = StaticPage.all

    render json: @static_pages
  end

  # GET /static_pages/1
  def show
    render json: @static_page
  end

  # POST /static_pages
  def create
    @static_page = StaticPage.new(static_page_params)

    if @static_page.save
      render json: @static_page, status: :created, location: @static_page
    else
      render json: @static_page.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /static_pages/1
  def update
    if @static_page.update(static_page_params)
      render json: @static_page
    else
      render json: @static_page.errors, status: :unprocessable_entity
    end
  end

  # DELETE /static_pages/1
  def destroy
    @static_page.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_static_page
      @static_page = StaticPage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def static_page_params
      params.fetch(:static_page, {})
    end
end
