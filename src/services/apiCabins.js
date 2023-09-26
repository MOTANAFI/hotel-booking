import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    
const  { data, error } = await supabase
.from('cabins')
.select('*')

if(error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
}

return data
}
export async function createEditCabin(newCabin, id) {

    console.log(newCabin, id)
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = hasImagePath ? newCabin.image :  `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`


    // https://bmmtdheggenrvgswdwam.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
    // 1. create cabin

    // 1. Create / Edit cabin
    let query = supabase.from("cabins");

    // A) Create cabin
    if(!id) query =  query
.insert([{...newCabin, image: imagePath}])

// B) Edit 
if(id) query = query
.update({ other_column: 'otherValue' })
.eq('id', id)
.select()
const {data, error } = await query.select().single()

if (error) {
    console.error(error)
    throw new Error("Cabin could not be created")
}

// 2. Upload image

const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

  //3. Delete the cabin if there was an error uploadig image

  if(storageError) {
    await supabase.from("cabins").delete().eq("id", data.id)

    console.error(storageError)
    throw new Error("Cabin image could not be uploaded, hence cabin is not created")

  }

    
}

export async function deleteCabin(id) {

    const {data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
  


if(error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
}

return data


}