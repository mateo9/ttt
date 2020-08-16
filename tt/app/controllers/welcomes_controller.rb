class WelcomesController < ApplicationController
  def index
    render component: 'UserRegistationForm', props: { users: User.new }
  end
end