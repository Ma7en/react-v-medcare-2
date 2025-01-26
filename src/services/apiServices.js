import supabase, { supabaseUrl } from "./supabase";

// Services
export async function getServices() {
    let { data, error } = await supabase.from("services").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Services could not be loaded`);
    }
    return data;
}

export async function getService(id) {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Service not found");
    }

    return data;
}

export async function createService(obj, id) {
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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${imageName}`;
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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${videoName}`;

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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${trackName}`;

        if (obj.video.track === undefined || obj.video.track === "") {
            trackPath = "";
        }

        //3)=============================
        // 1) create/edit service
        let query = supabase.from("services");

        // if (obj.image.src || obj.image.url || obj.video.src || obj.video.url) {

        if (!id) {
            query = query.insert([
                {
                    ...obj,
                    video: {
                        ...obj.video,
                        src: videoPath,
                        track: trackPath,
                    },
                    image: { ...obj.image, src: imagePath },
                },
            ]);
        }
        // } else {
        //     if (!id) {
        //         query = query.insert([
        //             {
        //                 ...obj,
        //             },
        //         ]);
        //     }
        // }

        const { data, error } = await query.select().single();

        if (error) {
            console.error(error);
            throw new Error("Service could not be Created");
        }

        //3)=============================
        // 2) upload image
        if (!hasImagePath) {
            await supabase.storage
                .from("images/services")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/services")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/services")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Service could not be Created");
    }
}

// export async function updateService(obj, id) {
export async function updateService(obj, id) {
    console.log(`obj`, obj);
    // console.log(`obj`, typeof obj.image.src);

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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${imageName}`;

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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${videoName}`;

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
            : `${supabaseUrl}/storage/v1/object/public/images/services/${trackName}`;

        if (obj.video.track === undefined || obj.video.track === "") {
            trackPath = "";
        }

        console.log(`-----obj---------`, obj);

        // 2) ==================
        // 1) create/edit service
        // let query = supabase.from("services");
        // // B) EDIT
        // if (!id) {
        //     query = query
        //         .update({
        //             ...obj,
        //             video: { ...obj.video, src: videoPath, track: trackPath },
        //             image: { ...obj.image, src: imagePath },
        //         })
        //         .eq("id", id);
        // }
        // const { data, error } = await query.select().single();
        // console.log(`axx--`, query);
        // const { data, error } = await query.select();
        // if (error) {
        //     console.error(error);
        //     throw new Error("Services could not be Updated");
        // }

        // B) edit

        if (!id) return null;
        const { data, error } = await supabase
            .from("services")
            .update({
                ...obj,
                video: { ...obj.video, src: videoPath, track: trackPath },
                image: { ...obj.image, src: imagePath },
            })
            .eq("id", id)
            .select();
        if (error) {
            console.error(error);
            throw new Error("Services could not be Updated");
        }

        console.log(`-x-x-`, hasImagePath);
        console.log(
            `-`,
            !hasImagePath,
            "-",
            obj.image.src !== undefined,
            "-",
            obj.image.src === "",
        );

        //3)  ==================
        // 1) upload image and video and track
        // if (
        //     !hasImagePath ||
        //     obj.image.src !== undefined ||
        //     obj.image.src === ""
        if (!hasImagePath) {
            await supabase.storage
                .from("images/services")
                .upload(imageName, obj.image.src);
        }
        if (!hasVideoPath) {
            await supabase.storage
                .from("images/services")
                .upload(videoName, obj.video.src);
        }
        if (!hasTrackPath) {
            await supabase.storage
                .from("images/services")
                .upload(trackName, obj.video.track);
        }

        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Services could not be updated");
    }
}

export async function deleteService(id) {
    const { data, error } = await supabase
        .from("services")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Service could not be deleted");
    }

    return data;
}
