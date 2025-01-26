/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useUser } from "../authentication/useUser";
import { useUpdateLanding } from "./useUpdateLanding";

import Spinner from "../../ui/spinner/Spinner";
import LandingCreated from "../../ui/landing/LandingCreated";
import Form from "../../ui/form/Form";
import FormRowVertical from "../../ui/form/FormRowVertical";
import DevSrc from "../../ui/form/DevSrc";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import Label from "../../ui/form/Label";
import FileInput from "../../ui/form/FileInput";
import FormRow from "../../ui/form/FormRow";
import Button from "../../ui/global/Button";
import Or from "../../ui/form/Or";

function UpdateLandingForm({ landing }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;

    const {
        id: updateId,
        dataupdate,
        title,
        summary,
        image,
        video,
        email,
        user_id,
    } = landing;
    const { isUpdating, updateAboutUs } = useUpdateLanding();

    const { register, handleSubmit, reset, getValues, formState, setValue } =
        useForm({
            defaultValues: landing,
        });
    const { errors } = formState;

    useEffect(() => {
        const updateAboutData = async () => {
            try {
                setValue("title", title || "");
                setValue("summary", summary || "");
                setValue("dataupdate", new Date().toISOString() || dataupdate);

                const videoData = async () => {
                    try {
                        setValue("video", {
                            url: `${video.url}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                videoData();

                const imageData = async () => {
                    try {
                        setValue("image", {
                            alt: `${image.alt}`,
                            caption: `${image.caption}`,
                            url: `${image.url}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                imageData();
            } catch (error) {
                console.error(error);
            }
        };
        updateAboutData();
    }, [
        dataupdate,
        image.alt,
        image.caption,
        image.url,
        setValue,
        summary,
        title,
        video.src,
        video.track,
        video.url,
    ]);

    function onSubmit(data) {
        // console.log(`d===========`, data);

        let imageSrc =
            data.image && data.image.src ? data.image.src[0] : image.src;
        // typeof data.image === "string" ? data?.image : data?.image?.src[0];
        let ImageE = {
            ...data.image,
            src: imageSrc,
        };

        let videoSrc =
            data.video && data.video.src ? data.video.src[0] : video.src;
        let videoTrack =
            data.video && data.video.track ? data.video.track[0] : video.track;
        let videoE = {
            ...data.video,
            src: videoSrc,
            track: videoTrack,
        };

        updateAboutUs(
            {
                newAboutUsData: {
                    ...data,
                    image: { ...ImageE },
                    video: { ...videoE },
                    email: userEmail,
                    user_id: userId,
                },
                id: updateId,
            },
            {
                // eslint-disable-next-line no-unused-vars
                onSuccess: (data) => {
                    reset();
                },
            },
        );
    }

    function onError(errors) {
        console.log(errors);
    }

    if (isUpdating) return <Spinner />;

    return (
        <>
            <LandingCreated dataupdate={dataupdate} />

            <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
                <FormRowVertical
                    label="Landing title"
                    error={errors?.title?.message}
                >
                    <Input
                        type="text"
                        id="title"
                        disabled={isUpdating}
                        {...register("title", {
                            required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="summary for Landing"
                    error={errors?.summary?.message}
                >
                    <Textarea
                        id="summary"
                        defaultValue=""
                        disabled={isUpdating}
                        {...register("summary", {
                            required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Landing video"
                    error={errors?.video?.message}
                >
                    <>
                        <DevSrc>
                            <Label type="3" htmlFor="video">
                                Choose the video
                            </Label>

                            <FileInput
                                id="video"
                                accept="video/* "
                                // type="file"
                                {...register("video.src", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <Or />

                        <DevSrc>
                            <Label type="3" htmlFor="urlvideo">
                                Type the URL
                            </Label>

                            <Input
                                type="text"
                                id="urlvideo"
                                disabled={isUpdating}
                                {...register("video.url", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="track">
                                Choose the Track video
                            </Label>

                            <FileInput
                                id="track"
                                // accept="text/*,.srt,.vtt"
                                accept=".txt,.srt,.vtt"
                                // type="file"
                                {...register("video.track", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>
                    </>
                </FormRowVertical>

                <FormRowVertical
                    label="Landing photo"
                    error={errors?.image?.message}
                >
                    <>
                        <DevSrc>
                            <Label type="3" htmlFor="image">
                                Choose the picture
                            </Label>

                            <FileInput
                                id="image"
                                accept="image/* "
                                {...register("image.src", {
                                    // required: image.src
                                    //     ? false
                                    //     : "This field is required",
                                })}
                            />
                        </DevSrc>

                        <Or />

                        <DevSrc>
                            <Label type="3" htmlFor="url">
                                Type the URL
                            </Label>

                            <Input
                                type="text"
                                id="url"
                                disabled={isUpdating}
                                {...register("image.url", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="alt">
                                Enter your description picture
                            </Label>
                            <Input
                                type="text"
                                id="alt"
                                placeholder="Enter your description picture"
                                disabled={isUpdating}
                                {...register("image.alt", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="caption">
                                Enter your Caption picture
                            </Label>

                            <Input
                                type="text"
                                id="caption"
                                placeholder="Enter your Caption picture"
                                disabled={isUpdating}
                                {...register("image.caption", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>
                    </>
                </FormRowVertical>

                <FormRow>
                    {/* type is an HTML attribute! */}
                    {/* <Button variation="secondary" type="reset">
                    Cancel
                </Button> */}

                    <Button disabled={isUpdating}>Update About</Button>
                </FormRow>
            </Form>

            {/* CreatedBy */}
        </>
    );
}

export default UpdateLandingForm;
