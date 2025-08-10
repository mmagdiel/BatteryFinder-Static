import type { SubmitHandler } from "react-hook-form";
import type { LoginValues } from "../models";

import { Header, HeaderLogin } from "../components";
import { useLocalStorageState } from "ahooks";
import { useForm } from "react-hook-form";
import { urlLoginBy } from "../utils";
import { mutate } from "../services";
import { TOKEN } from "../models";

const PageLogin = () => {
  const [_, setValue] = useLocalStorageState(TOKEN, {
    defaultValue: "",
    serializer: (v) => v ?? "",
    deserializer: (v) => v,
  });
  const { register, handleSubmit } = useForm<LoginValues>();
  const onSubmit: SubmitHandler<LoginValues> = async (data: LoginValues) => {
    try {
      const response = await mutate(urlLoginBy(), data);
      setValue(response.data.data.accessToken);
      window.location.href = "/login";
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Header>
      <main className="login_screen bg-base-200 flex">
        <div className="hidden lg:flex lg:w-2/3 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black bg-opacity-40 login_screen_img" />
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center p-8">
          <div className="card w-full max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
              <HeaderLogin />
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label>
                    <div className="label-text">Email</div>
                    <input
                      {...register("email")}
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label>
                    <div className="label-text">Password</div>
                    <input
                      {...register("password")}
                      placeholder="Enter your password"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Header>
  );
};

export { PageLogin };
