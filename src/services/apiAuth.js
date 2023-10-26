import supabase from "./supabase";

export async function signup({ email, password, fullName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error("you can't signup, please check your data");
  }

  return { data };
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Email or Password is invalid");
  }

  return { data };
}

// فهمي مش كلام جوناس
export async function getCurrentUser() {
  // is he logged in ?
  const { data: session } = await supabase.auth.getSession();
  // no user is auth
  if (!session) return null;
  // re-fetch the user
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error("you are not authenticated");
  }

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error("error in logged out");
  }
}

export async function updateCurrentUser({ avatar, password, fullName }) {
  //1. update Password OR FullName
  let updatedData;
  if (password) updatedData = { password };
  if (fullName) updatedData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updatedData);

  if (error) throw new Error("there is an error in updating your data");
  if (!avatar) return data;

  //.2 upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError)
    throw new Error("there is an error in uploading your image");

  //.3 update avatar in user
  const { data: updatedUser, error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabase.supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error("there is an error in uploading your image");

  return updatedUser;
}
