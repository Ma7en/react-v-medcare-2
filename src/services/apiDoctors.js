/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getDoctors() {
    let { data, error } = await supabase.from("doctors").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Doctors could not be loaded`);
    }
    return data;
}

export async function getDoctor(id) {
    const { data, error } = await supabase
        .from("doctors")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Doctor not found");
    }

    return data;
}

export async function createDoctor(obj, id) {
    // console.log(`c`, obj);
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
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${imageName}`;

        //2) videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${videoName}`;

        //3) videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        const trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${trackName}`;

        //3)=============================
        // 1) create/edit service
        let query = supabase.from("doctors");

        if (!id)
            query = query.insert([
                {
                    ...obj,
                    video: { ...obj.video, src: videoPath, track: trackPath },
                    image: { ...obj.image, src: imagePath },
                },
            ]);

        const { data, error } = await query.select().single();

        if (error) {
            console.error(error);
            throw new Error("Doctors could not be Updated");
        }

        //3)=============================
        // 2) upload image
        if (!hasImagePath) {
            await supabase.storage
                .from("images/doctors")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/doctors")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/doctors")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Doctors could not be updated or uploaded");
    }
}

export async function updateDoctor(obj, id) {
    try {
        //1)=============================
        // 1) image
        const hasImagePath = obj.image?.src?.startsWith?.(supabaseUrl);
        const imageName = `${Date.now()}-${obj.image?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const imagePath = hasImagePath
            ? obj.image.src
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${imageName}`;

        //2) videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        const videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${videoName}`;

        //3) videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        const trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/images/doctors/${trackName}`;

        // 2) ==================
        // 1) create/edit service
        let query = supabase.from("doctors");

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
            throw new Error("Doctors could not be Updated");
        }

        //3)  ============================
        // 1) upload image and video and track
        if (!hasImagePath) {
            await supabase.storage
                .from("images/doctors")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/doctors")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/doctors")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Doctors could not be updated or uploaded");
    }
}

export async function deleteDoctor(id) {
    const { data, error } = await supabase
        .from("doctors")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Doctor could not be deleted");
    }

    return data;
}
