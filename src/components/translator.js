import {useTranslation} from "react-i18next";
import React from "react";
import '../i18next';
import i18n from "i18next";


function MyComponent(props) {
    const {t, i18n} = useTranslation();
    let text = props.text
    return <div>
        {t(text)}
    </div>
}



export default MyComponent;