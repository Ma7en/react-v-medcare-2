/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledVideo = styled.div`
    width: 100%;
    // max-height: 50vh;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 0;
    margin: 0;
    border: var(--border);
    // border-top: var(--border);
    // border-bottom: var(--border);
    box-shadow: var(--box-shadow);
    background-color: var(--green);
    video {
        width: 100%;
        // max-height: 400px;
    }
`;

function Video({ src, track }) {
    return (
        <>
            <StyledVideo>
                <video controls>
                    <source src={src} type="video/mp4" />
                    {track && <track default src={track} />}
                    {/* 
                    يُستخدم هذا العنصر عند عمل ترجمة لمقطع فيديو وتظهر اثناء تشغيل الفيديو مثل فيديوهات اليوتيوب كده.
                    default: نضعه مع هذا العنصر اذا اردنا تشغيل الترجمة تلقائيه عند تشغيل الفيديو وهو ليس له قيمة.
                    */}
                    {/* <track default src="example.vtt" /> */}
                </video>
            </StyledVideo>
        </>
    );
}

export default Video;
