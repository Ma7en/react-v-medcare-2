/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getBlogs() {
    let { data, error } = await supabase.from("blogs").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Blogs could not be loaded`);
    }
    return data;
}

export async function getBlog(id) {
    const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Blog not found");
    }

    return data;
}

export async function createBlog(obj, id) {
    // console.log(`c`, obj);
    try {
        //1)=============================
        //1) image
        const hasImagePath = obj.image?.src?.startsWith?.(supabaseUrl);
        const imageName = `${Date.now()}-${obj.image?.src?.name}`.replaceAll(
            "/",
            "",
        );
        let imagePath = hasImagePath
            ? obj.image.src
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${imageName}`;
        if (obj.image.src === undefined || obj.image.src === "") {
            imagePath = "";
        }

        //2) videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        let videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${videoName}`;
        if (obj.video.src === undefined || obj.video.src === "") {
            videoPath = "";
        }

        //3) videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        let trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${trackName}`;

        if (obj.video.track === undefined || obj.video.track === "") {
            trackPath = "";
        }

        //3)=============================
        // 1) create/edit service
        let query = supabase.from("blogs");

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
            throw new Error("Blog could not be Updated");
        }

        //3)=============================
        // 2) upload image
        if (!hasImagePath) {
            await supabase.storage
                .from("images/blogs")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/blogs")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/blogs")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Blog could not be updated or uploaded");
    }

    // const { data, error } = await supabase
    //     .from("blogs")
    //     .insert([{ ...newBlog }])
    //     .select();

    // if (error) {
    //     console.error(error);
    //     throw new Error("Blog could not be Created");
    // }
    // return data;
}

export async function updateBlog(obj, id) {
    try {
        //1)=============================
        // 1) image
        const hasImagePath = obj.image?.src?.startsWith?.(supabaseUrl);
        const imageName = `${Date.now()}-${obj.image?.src?.name}`.replaceAll(
            "/",
            "",
        );
        let imagePath = hasImagePath
            ? obj.image.src
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${imageName}`;

        if (obj.image.src === undefined || obj.image.src === "") {
            imagePath = "";
        }
        //2) videoSrc
        const hasVideoPath = obj.video?.src?.startsWith?.(supabaseUrl);
        const videoName = `${Date.now()}-${obj.video?.src?.name}`.replaceAll(
            "/",
            "",
        );
        let videoPath = hasVideoPath
            ? obj.video.src
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${videoName}`;

        if (obj.video.src === undefined || obj.video.src === "") {
            videoPath = "";
        }

        //3) videoTrack
        const hasTrackPath = obj.video?.track?.startsWith?.(supabaseUrl);
        const trackName = `${Date.now()}-${obj.video?.track?.name}`.replaceAll(
            "/",
            "",
        );
        let trackPath = hasTrackPath
            ? obj.video.track
            : `${supabaseUrl}/storage/v1/object/public/images/blogs/${trackName}`;

        if (obj.video.track === undefined || obj.video.track === "") {
            trackPath = "";
        }

        // // 2) ==================
        // // 1) create/edit service
        // let query = supabase.from("blogs");
        // // B) EDIT
        // if (id) {
        //     query = query
        //         .update({
        //             ...obj,
        //             video: { ...obj.video, src: videoPath, track: trackPath },
        //             image: { ...obj.image, src: imagePath },
        //         })
        //         .eq("id", id);
        // }
        // const { data, error } = await query.select().single();
        // if (error) {
        //     console.error(error);
        //     throw new Error("Blogs could not be Updated");
        // }

        // B) edit

        if (!id) return null;
        const { data, error } = await supabase
            .from("blogs")
            .update({
                ...obj,
                video: { ...obj.video, src: videoPath, track: trackPath },
                image: { ...obj.image, src: imagePath },
            })
            .eq("id", id)
            .select();
        if (error) {
            console.error(error);
            throw new Error("Blogs could not be Updated");
        }

        //3)  ==================
        // 1) upload image and video and track
        if (!hasImagePath) {
            await supabase.storage
                .from("images/blogs")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/blogs")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/blogs")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Blogs could not be updated or uploaded");
    }
}

export async function deleteBlog(id) {
    const { data, error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Blog could not be deleted");
    }

    return data;
}
