require 'test_helper'

class InquiriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inquiry = inquiries(:one)
  end

  test "should get index" do
    get inquiries_url, as: :json
    assert_response :success
  end

  test "should create inquiry" do
    assert_difference('Inquiry.count') do
      post inquiries_url, params: { inquiry: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show inquiry" do
    get inquiry_url(@inquiry), as: :json
    assert_response :success
  end

  test "should update inquiry" do
    patch inquiry_url(@inquiry), params: { inquiry: {  } }, as: :json
    assert_response 200
  end

  test "should destroy inquiry" do
    assert_difference('Inquiry.count', -1) do
      delete inquiry_url(@inquiry), as: :json
    end

    assert_response 204
  end
end
