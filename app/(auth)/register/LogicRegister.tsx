"use client"
import { useForm } from "react-hook-form";
import ForgetPassword from "../components/ForgetPassword";
import Form from "../components/Form";
import FormBtn from "../components/FormBtn";

import Inputs from "../components/Inputs";
import LoginBtnList from "../components/LoginBtnList";
import Register from "../components/Register";
import Rememberme from "../components/RememberMe";
import { useState } from "react";

function LogicRegister() {

    const { register, handleSubmit } = useForm();
    const [state, setToggle] = useState<boolean>(false);

    const onSubmit = (data: { email: string; tel: string }) => {

        console.log(data);
        const userData = {
            email: data.email,
            phoneNumber: data.tel,
            remeberStatus: state,
        };

        console.log(userData);
    }

    return ( 
        <Form handleSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">
                <Inputs
                    name="email"
                    placeholder="Email address"
                    register={register}
                />
                <Inputs
                    name="tel"
                    placeholder="Phone number"
                    register={register}
                />

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Rememberme
                        state={state}
                        setState={setToggle}
                    />
                    <ForgetPassword />
                </div>
            </div>

            <FormBtn />
            <LoginBtnList />
            <div className="w-full lg:hidden flex items-center justify-center mt-8">
                <Register />
            </div>
        </Form>
     );
}

export default LogicRegister;