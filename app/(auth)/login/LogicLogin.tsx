"use client"
import { useState } from "react";
import ForgetPassword from "../components/ForgetPassword";
import FormBtn from "../components/FormBtn";
import Inputs from "../components/Inputs";
import LoginBtnList from "../components/LoginBtnList";
import Rememberme from "../components/RememberMe";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import Register from "../components/Register";

function LogicLogin() {

    const { register, handleSubmit } = useForm();
    const [state, setToggle] = useState<boolean>(false);

    const onSubmit = (data: { email: string; password: string }) => {

        const userData = {
            email: data.email,
            password: data.password,
            remeberStatus: state,
        };

        console.log(userData);
    }

    return (
        <>

            <Form handleSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-7">
                    <Inputs
                        name="email"
                        placeholder="Email address"
                        register={register}
                    />
                    <Inputs
                        name="password"
                        placeholder="Password"
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

        </>
    );
}

export default LogicLogin;