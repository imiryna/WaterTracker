import React from "react";
import { AuthPageDiv } from "components/SignIn/SignIn.styled";
import UpdatePasswordForm from "components/UpdatePassword/UpdatePassword";

const UpdatePassword = () => {
    return <AuthPageDiv>
        <UpdatePasswordForm/>
    </AuthPageDiv>
};

export default UpdatePassword;