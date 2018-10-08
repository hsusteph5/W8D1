if current_user
  json.set! user do
    json.extract! user, :username, :password_digest
  end
else
  {}
end 
