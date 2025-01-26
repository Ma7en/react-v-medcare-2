/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getAboutUs() {
    let { data, error } = await supabase.from("aboutus").select("*");
    // let { data, error } = await supabase.from("citiess").select("*");

    if (error) {
        console.error(error);
        throw new Error(`AboutUs could not be loaded`);
        // console.log(data);
    }
    return data;
}

// export async function getCity(id) {
//     const { data, error } = await supabase
//         .from("cities")

//         .select("*")
//         .eq("id", id)
//         .single();

//     if (error) {
//         console.error(error);
//         throw new Error("City not found");
//     }

//     return data;
// }

// export async function createCity(newCity, id) {
//     const { data, error } = await supabase
//         .from("cities")
//         // .from("citiess")
//         // .insert([{ some_column: "someValue", other_column: "otherValue" }])
//         .insert([{ ...newCity }])
//         .select();

//     if (error) {
//         console.error(error);
//         throw new Error("City could not be Created");
//     }
//     return data;
// }

export async function updateAboutUs(obj, id) {
    // https://pcyqsotaevsfhfargbfl.supabase.co/storage/v1/object/public/aboutus/neurorons.mp4?t=2024-02-07T18%3A35%3A09.879Z
    // https://pcyqsotaevsfhfargbfl.supabase.co/storage/v1/object/public/images/aboutus/about-img.svg
    // https://pcyqsotaevsfhfargbfl.supabase.co/storage/v1/object/public/images/aboutus/recording.mp4
    console.log(`obj`, obj);
    try {
        //1)=============================
        //1) image
        const hasImagePath = obj.image?.src?.startsWith?.(supabaseUrl);
        const imageName = `${Date.now()}-${obj.image?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const imagePath = hasImagePath
            ? obj.image.src
            : `${supabaseUrl}/storage/v1/object/public/images/aboutus/${imageName}`;

        //2) videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/images/aboutus/${videoName}`;

        //3) videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        const trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/images/aboutus/${trackName}`;

        //2)=============================
        // 1) create/edit aboutus
        let query = supabase.from("aboutus");

        // B) EDIT
        if (id) {
            query = query
                .update({
                    ...obj,
                    video: { ...obj.video, src: videoPath, track: trackPath },
                    image: { ...obj.image, src: imagePath },
                })
                .eq("id", id);
        }

        const { data, error } = await query.select().single();

        if (error) {
            console.error(error);
            throw new Error("AboutUs could not be Updated");
        }

        //3)=============================
        // 2) upload image

        if (!hasImagePath) {
            await supabase.storage
                .from("images/aboutus")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/aboutus")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/aboutus")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("AboutUs could not be updated or uploaded");
    }
}

export async function deleteAboutUs(id) {
    const { data, error } = await supabase
        .from("aboutus")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("AboutUs could not be deleted");
    }

    return data;
}
