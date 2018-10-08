export const signupUser = (formUser) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: formUser,
  })
);


export const loginUser = (formUser) => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: formUser,
  })
);


export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/session",
  })
);
