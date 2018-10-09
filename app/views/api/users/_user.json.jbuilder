if current_user
  json.extract! user, :username, :password_digest, :id
else
  {}
end
