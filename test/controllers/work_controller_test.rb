require 'test_helper'

class WorkControllerTest < ActionController::TestCase
  test "should get justa" do
    get :justa
    assert_response :success
  end

  test "should get PPIE" do
    get :PPIE
    assert_response :success
  end

  test "should get javascript" do
    get :javascript
    assert_response :success
  end

  test "should get OMW" do
    get :OMW
    assert_response :success
  end

end
