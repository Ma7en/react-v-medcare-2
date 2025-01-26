/* eslint-disable no-unused-vars */
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

 
    // ===============================
    
    
    
    /* &,&.light-mode {
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
    // --color-brand-600: #4f46e5;
    --color-brand-600: #16a085ed;
    // --color-brand-700: #4338ca;
    --color-brand-700: #16a085;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81; 

    // 
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    // padding
    --padding-sc: 50px; */

    // ===============================
    &,&.light-mode {
 
    --primary-color: #1ce1ac;
    --primary-dark: #1ce1b0;
    --primary-light: #eafff9;
    --soft-primary-color: rgba(28, 225, 172, 0.12);
    
    }
    &.dark-mode {
        
    --primary-color: #1ce1ac;
    --primary-dark: #1ce1b0;
    --primary-light: #eafff9;
    --soft-primary-color: rgba(28, 225, 172, 0.12);
    
    }
    
    
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
    font-family: "Manrope", sans-serif; 
    position: relative;
    line-height: 1.6;
    font-size: 1.6rem;
    font-weight: 400; 
}





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
