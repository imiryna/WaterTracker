import React from "react";
import { AuthPageDiv } from "components/SignIn/SignIn.styled";
import { ForgotPasswordForm } from "components/ForgotPassword/ForgotPassword";

const ForgotPassword = () => {
    return <AuthPageDiv>
        <ForgotPasswordForm/>
    </AuthPageDiv>
};

export default ForgotPassword;