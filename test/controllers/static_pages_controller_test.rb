require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  def setup
    @base_title = "Shai Wilson"
  end

  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get work" do
    get :work
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

end
