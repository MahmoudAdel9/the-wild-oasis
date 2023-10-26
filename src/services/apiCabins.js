import supabase, { supabaseUrl } from "./supabase";

//get Cabins
export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw Error("The Cabins Could Not Be Loaded");
  }

  return cabins;
}

// Delete
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw Error("The Cabin Could Not Be Deleted");
  }
}

// Add
export async function addEditCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);

  //https://nwsqebzedftgldayghky.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  let query = supabase.from("cabins");

  //create a cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw Error("The Cabin Could Not Be Added");
  }

  //upload an image
  if (hasImage) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

  // delete the cabin if there is an error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw Error("The Cabin image could not be uploaded");
  }

  return data;
}
