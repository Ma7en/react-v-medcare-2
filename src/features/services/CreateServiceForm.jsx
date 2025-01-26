/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import FileInput from "../../ui/form/FileInput";
import Button from "../../ui/global/Button";
import FormRowVertical from "../../ui/form/FormRowVertical";
import DevSrc from "../../ui/form/DevSrc";
import Label from "../../ui/form/Label";
import Or from "../../ui/form/Or";
import AddDesLine from "../../ui/form/AddDesLine";

import { useCreateService } from "./useCreateService";
import { useUser } from "../authentication/useUser";

function CreateServiceForm({ onCloseModal }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;
    const { fullName, avatar } = user.user_metadata;

    const { isCreating, createService } = useCreateService();

    const [desLine, setDesLine] = useState(6);
    const [errorDesLine, setErrorDesLine] = useState("");

    const { register, handleSubmit, reset, getValues, setValue, formState } =
        useForm({});
    const { errors } = formState;

    useEffect(() => {
        const setData = async () => {
            try {
                setValue("icon", "FaUserMd");
            } catch (error) {
                console.error(error);
            }
        };
        setData();
    }, [setValue]);

    function HandleAddDesLine() {
        const numberOfLines = Object.keys(getValues().description).length;
        if (getValues().description[`line${numberOfLines - 1}`]) {
            setDesLine(desLine + 1);
        } else {
            setErrorDesLine("Please fill out these fields");
        }
    }

    function onSubmit(data) {
        let imageSrc =
            data.image && data.image.src ? data.image.src[0] : data.image.src;
        let ImageE;
        ImageE = {
            ...data.image,
            src: imageSrc,
        };

        let videoSrc =
            data.video && data.video.src ? data.video.src[0] : data.video.src;
        let videoTrack =
            data.video && data.video.track
                ? data.video.track[0]
                : data.video.track;
        let videoE = {
            ...data.video,
            src: videoSrc,
            track: videoTrack,
        };

        createService(
            {
                ...data,
                image: { ...ImageE },
                video: { ...videoE },
                email: userEmail,
                user_id: userId,
                username: fullName,
            },
            {
                onSuccess: (data) => {
                    reset();
                    onCloseModal?.();
                },
            },
        );
    }

    function onError(errors) {
        // console.log(errors);
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit, onError)}
            type={onCloseModal ? "modal" : "regular"}
        >
            <FormRowVertical
                label="Service title"
                error={errors?.title?.message}
            >
                <Input
                    type="text"
                    id="title"
                    disabled={isCreating}
                    {...register("title", {
                        required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical label="Service icon" error={errors?.icon?.message}>
                <Input
                    type="text"
                    id="icon"
                    disabled={isCreating}
                    {...register("icon", {
                        // required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical
                label="summary for Service"
                error={errors?.summary?.message}
            >
                <Textarea
                    id="summary"
                    defaultValue=""
                    disabled={isCreating}
                    {...register("summary", {
                        required: "This field is required",
                    })}
                />
            </FormRowVertical>

            <FormRowVertical
                label="Description for Service"
                error={errors?.description?.message}
            >
                <>
                    {Array.from({ length: desLine }, (_, i) => (
                        <Input
                            key={i}
                            type="text"
                            id={`description.line${i}`}
                            disabled={isCreating}
                            {...register(`description.line${i}`, {
                                // required: "This field is required",
                            })}
                        />
                    ))}
                    <AddDesLine
                        fn={HandleAddDesLine}
                        text="Add Input"
                        error={errorDesLine}
                    />
                </>
            </FormRowVertical>

            <FormRowVertical
                label="Service video"
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
                            disabled={isCreating}
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
                label="Service photo"
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
                            disabled={isCreating}
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
                            disabled={isCreating}
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
                            disabled={isCreating}
                            {...register("image.caption", {
                                required: "This field is required",
                            })}
                        />
                    </DevSrc>
                </>
            </FormRowVertical>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>

                <Button disabled={isCreating}>Create</Button>
            </FormRow>
        </Form>
    );
}

export default CreateServiceForm;
