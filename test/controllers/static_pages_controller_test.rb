require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @static_page = static_pages(:one)
  end

  test "should get index" do
    get static_pages_url, as: :json
    assert_response :success
  end

  test "should create static_page" do
    assert_difference('StaticPage.count') do
      post static_pages_url, params: { static_page: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show static_page" do
    get static_page_url(@static_page), as: :json
    assert_response :success
  end

  test "should update static_page" do
    patch static_page_url(@static_page), params: { static_page: {  } }, as: :json
    assert_response 200
  end

  test "should destroy static_page" do
    assert_difference('StaticPage.count', -1) do
      delete static_page_url(@static_page), as: :json
    end

    assert_response 204
  end
end
