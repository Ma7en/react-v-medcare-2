/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useUser } from "../authentication/useUser";

import Spinner from "../../ui/spinner/Spinner";
import Form from "../../ui/form/Form";
import FormRowVertical from "../../ui/form/FormRowVertical";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import DevSrc from "../../ui/form/DevSrc";
import Label from "../../ui/form/Label";
import FileInput from "../../ui/form/FileInput";
import Or from "../../ui/form/Or";
import FormRow from "../../ui/form/FormRow";
import Button from "../../ui/global/Button";
import AddDesLine from "../../ui/form/AddDesLine";
import { useUpdateIconNumber } from "./useUpdateIconNumber";

function UpdateIconNumberForm({ iconnumber, onCloseModal }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;
    const { fullName, avatar } = user.user_metadata;

    const {
        id: updateId,
        dataupdate,
        icon,
        title,
        number,
        email,
        user_id,
        username,
    } = iconnumber;
    const { ...editIconNumber } = iconnumber;
    const { isUpdating, updateIconNumber } = useUpdateIconNumber();

    const { register, handleSubmit, reset, getValues, formState, setValue } =
        useForm({
            defaultValues: editIconNumber,
        });
    const { errors } = formState;

    useEffect(() => {
        const updateAboutData = async () => {
            try {
                setValue("title", title || "");
                setValue("icon", icon || "");
                setValue("number", number || "");
                // setValue("summary", summary || "");
                // setValue("dataupdate", new Date().toISOString() || dataupdate);
                setValue("dataupdate", dataupdate);

                // const descriptionData = async () => {
                //     try {
                //         Object.keys(description).forEach((des) => {
                //             setValue(`description.${des}`, description[des]);
                //         });
                //     } catch (error) {
                //         console.log(error);
                //     }
                // };
                // descriptionData();

                // const videoData = async () => {
                //     try {
                //         setValue("video", {
                //             // src: `${video.src}`,
                //             // track: `${video.track}`,
                //             url: `${video.url}`,
                //         });
                //     } catch (error) {
                //         console.log(error);
                //     }
                // };
                // videoData();

                // const imageData = async () => {
                //     try {
                //         setValue("image", {
                //             alt: `${image.alt}`,
                //             caption: `${image.caption}`,
                //             url: `${image.url}`,
                //         });
                //     } catch (error) {
                //         console.log(error);
                //     }
                // };
                // imageData();
            } catch (error) {
                console.error(error);
            }
        };
        updateAboutData();
    }, [dataupdate, icon, number, setValue, title]);

    // const [desLine, setDesLine] = useState(
    //     Object.keys(getValues().description).length,
    // );
    // const [errorDesLine, setErrorDesLine] = useState("");
    // console.log(`x---`, Object.keys(getValues().description).length);

    // console.log(`d-----`, description);

    // function HandleAddDesLine() {
    //     const numberOfLines = Object.keys(getValues().description).length;
    //     if (getValues().description[`line${numberOfLines - 1}`]) {
    //         setDesLine(desLine + 1);
    //         const newKey = `line${numberOfLines}`;
    //         const newValue = "";
    //         description[newKey] = newValue;
    //     } else {
    //         setErrorDesLine("Please fill out these fields");
    //     }
    // }

    function onSubmit(data) {
        // console.log(`d===========`, data);

        // let imageSrc =
        //     data.image && data.image.src ? data.image.src[0] : image.src;
        // // typeof data.image === "string" ? data?.image : data?.image?.src[0];
        // let ImageE = {
        //     ...data.image,
        //     src: imageSrc,
        // };

        // let videoSrc =
        //     data.video && data.video.src ? data.video.src[0] : video.src;
        // let videoTrack =
        //     data.video && data.video.track ? data.video.track[0] : video.track;
        // let videoE = {
        //     ...data.video,
        //     src: videoSrc,
        //     track: videoTrack,
        // };

        // chat
        // تحويل الوصف إلى كائن يحتوي على السطور المختلفة
        // let description = {};
        // for (let i = 0; i < desLine; i++) {
        //     description[`line${i}`] = data[`description.line${i}`];
        // }

        updateIconNumber(
            {
                newServiceData: {
                    ...data,
                    // image: { ...ImageE },
                    // video: { ...videoE },
                    email: userEmail,
                    user_id: userId,
                    username: fullName,
                    // description: description, // تمرير الوصف المحدث هنا
                },
                id: updateId,
            },
            {
                // eslint-disable-next-line no-unused-vars
                onSuccess: (data) => {
                    reset();
                    onCloseModal?.();
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
            {/* <ServiceCreated dataupdate={dataupdate} /> */}

            <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
                <FormRowVertical
                    label="Service title"
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
                    label="Service icon"
                    error={errors?.icon?.message}
                >
                    <Input
                        type="text"
                        id="icon"
                        disabled={isUpdating}
                        {...register("icon", {
                            // required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRow>
                    {/* type is an HTML attribute! */}
                    {/* <Button variation="secondary" type="reset">
                    Cancel
                </Button> */}
                    <Button
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>

                    <Button disabled={isUpdating}>Update About</Button>
                </FormRow>
            </Form>

            {/* CreatedBy */}
        </>
    );
}

export default UpdateIconNumberForm;
