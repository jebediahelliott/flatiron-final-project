class InquiriesController < ApplicationController
  before_action :set_inquiry, only: [:show, :update, :destroy]

  # GET /inquiries
  def index
    @inquiries = Inquiry.all

    render json: @inquiries
  end

  # GET /inquiries/1
  def show
    render json: @inquiry
  end

  # POST /inquiries
  def create
    @inquiry = Inquiry.new(inquiry_params)

    if @inquiry.save
      render json: @inquiry, status: :created, location: @inquiry
    else
      render json: @inquiry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inquiries/1
  def update
    if @inquiry.update(inquiry_params)
      render json: @inquiry
    else
      render json: @inquiry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inquiries/1
  def destroy
    @inquiry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inquiry
      @inquiry = Inquiry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def inquiry_params
      params.fetch(:inquiry, {})
    end
end
