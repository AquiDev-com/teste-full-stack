import { createGlobalStyle } from "styled-components";
import resetCss from "./reset";
export const GlobalStyle = createGlobalStyle`
${resetCss}
.toast-sucess{}
.toast-error{}
body{
    max-width: 100vw;
    box-sizing: border-box;
}

:root{
    --yellow:#fab005;
    --yellow-2:#e67700;
    --orange:#e8590c;
    --red:#f03e3e;
    --blue:#1971c2;
    --blue-2:#364fc7;
    --white:#ffff;
    --grey-1:#e9ecef;
    --grey-2:#868e96;
    --black:#212529;


    --font_family: 'Inter', sans-serif;
    --font-size-title:1.875rem;
    --font-size-text:0.85rem;

    --font-weight-title:700;
    --font-weight-text:400;


}
`;
