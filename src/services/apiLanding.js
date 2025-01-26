/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";
// apiLanding
export async function getLanding() {
    let { data, error } = await supabase.from("landing").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Landing could not be loaded`);
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

// export async function createLanding(newCity, id) {
//     const { data, error } = await supabase
//         .from("landing")
//         .insert([{ ...newCity }])
//         .select();

//     if (error) {
//         console.error(error);
//         throw new Error("Landing could not be Created");
//     }
//     return data;
// }

export async function updateLanding(obj, id) {
    // console.log(`obj`, obj);
    try {
        //1)=== image
        const hasImagePath = obj.image?.src?.startsWith?.(supabaseUrl);
        const imageName = `${Date.now()}-${obj.image?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const imagePath = hasImagePath
            ? obj.image.src
            : `${supabaseUrl}/storage/v1/object/public/landing/${imageName}`;

        //2)=== videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/landing/${videoName}`;

        //3)=== videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        const trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/landing/${trackName}`;

        // ==================

        // 1)== create/edit cabin
        let query = supabase.from("landing");

        // B) EDIT
        if (id)
            query = query
                .update({
                    ...obj,
                    video: { ...obj.video, src: videoPath, track: trackPath },
                    image: { ...obj.image, src: imagePath },
                })
                .eq("id", id);

        const { data, error } = await query.select().single();

        if (error) {
            console.error(error);
            throw new Error("Landing could not be Updated");
        }

        // ==================

        if (!hasImagePath) {
            await supabase.storage
                .from("images/landing")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/landing")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/landing")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("AboutUs could not be updated or uploaded");
    }
}

export async function deleteLanding(id) {
    const { data, error } = await supabase
        .from("landing")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Landing could not be deleted");
    }

    return data;
}
