/* eslint-disable no-unused-vars */
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

    /* // Grey
    &,&.light-mode {
    // grey 
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    // blue 
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    // red 
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    // back
    --backdrop-color: rgba(255, 255, 255, 0.1);

    // shadow 
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    
    // image 
    --image-grayscale: 0;
    --image-opacity: 100%;

    }

    &.dark-mode {
    // grey 
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    // blue
    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    // red
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    // back
    --backdrop-color: rgba(0, 0, 0, 0.3);

    // shadow
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    // image For dark mode 
    --image-grayscale: 10%;
    --image-opacity: 90%;
    }

    // Indigo
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81; */
    
    // ===============================
    
    
    
    &,&.light-mode {
        // grey 
        --black: #444;
        --light-color: #777;
        --white: #fff;

        --color-grey-50: #f9fafb;
        // border
        --color-grey-100: #f3f4f6;
        --color-grey-300: #d1d5db;

        --color-grey-500: #6b7280;
        --color-grey-200: #e5e7eb;
        
        
        // main
        --green: #16a085;

        // red
        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;

        // back
        // --back-sec-1: #f5f5f5;
        --back-sec-1: #f9fafb;
        --back-sec-2: #fff;
        --back-box: #fff;
        
        //shadow
        --box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
        --text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
        
        // border
        --border: 0.2rem solid var(--green);
    }

    &.dark-mode {
        // grey 
        --black: #f9fafb;
        --light-color: #d1d5db;
        --white: #fff;

        --color-grey-50: #111827;

        // border
        --color-grey-100: #1f2937;
        --color-grey-300: #4b5563;
        
        --color-grey-200: #374151;
        --color-grey-500: #9ca3af;

        // main
        --green: #16a085;

        // red
        --color-red-100: #fee2e2;
        --color-red-700: #b91c1c;
        --color-red-800: #991b1b;
        
        //shadow
        --box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
        --text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

        // back
        // --back-sec-1: #f5f5f5;
        --back-sec-1: #111827;
        --back-sec-2: #1f2937;
        --back-box: #18212f;

        // border
        --border: 0.2rem solid var(--green);
    }

    // Indigo
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    /* --color-brand-600: #4f46e5; */
    --color-brand-600: #16a085ed;
    /* --color-brand-700: #4338ca; */
    --color-brand-700: #16a085;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81; 

    // 
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    // padding
    --padding-sc: 50px;

    // 
    --main-transition: all .5s;

}

/* start worldwise */

/* 
    border: 1px solid var(--color-grey-100);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

*/
 
/* === start reyset === */

*,
*::before,
*::after  {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* *:focus {
    outline: none;
} */

html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 62.5%;
}

ul {
    list-style: none;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    border: none;
    outline: none;
}

button:focus {
    cursor: pointer;
    /* border: none; */
    outline: none;
}

label {
    font-size: 1.6rem;
    font-weight: 600;
}

textarea {
    resize: none;
    outline: none;
}

/* textarea:focus {
    outline: none;
    border: none;
} */

input {
    border: none;
    /* outline: none; */
}

input:focus {
    outline: none;
}

:disabled {
    cursor: not-allowed;
}

select:disabled, input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
}

/* === end reyset === */

body {
    /* padding: 2rem; */
    font-family: "Manrope", sans-serif;
    /* color: var(--color-light--2); */
    position: relative;
    line-height: 1.6;
    font-size: 1.6rem;
    font-weight: 400;
    /* color: var(--color-grey-700);
    background-color: var(--color-grey-50); */
}


/*
input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}

button {
    cursor: pointer;
    user-select: none;
}

*:disabled {
    cursor: not-allowed;
}

select:disabled,
input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

button:has(svg) {
    line-height: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}

img {
    max-width: 100%;
    pointer-events: none;
    user-select: none;

    // For dark mode
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


.container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}


@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }

}
*/


/* start  */

/* input,
textarea {
    width: 100%;
    padding: 0.8rem 1.2rem;
    font-family: inherit;
    font-size: 1.6rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-light--3);
    transition: all 0.2s;
}

input:focus {
    outline: none;
    background-color: #fff;
}

.cta:link,
.cta:visited {
    display: inline-block;
    background-color: var(--color-brand--2);
    color: var(--color-dark--1);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 3rem;
    border-radius: 5px;
}
*/

/* .leaflet-control-attribution.leaflet-control {
    display: none;
} */




















/* ========== start media Queries =============== */


/* start max 767px */
@media (max-width: 767px) {
    
}

/* start min 768 */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }

}

/* start max 991 */
@media (max-width: 991px) {
    html {
    font-size: 50%;
    }
}

/* start min 992 */
@media (min-width: 992px) {
    .container {
        width: 970px;
    }

}

/* start min 1200 */
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }

}



/* ========== end media Queries =============== */

`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
