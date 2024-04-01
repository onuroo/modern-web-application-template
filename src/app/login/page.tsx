"use client";

import { Suspense } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Loading from "./loading";

import { asPrice } from "@/utils";

const Login = () => {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });
  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log(data);
  };
  console.log("errors", errors, isValid);
  // notFound();

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <a  className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
        <img src="/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
        <span>Flowbite</span>
        </a>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to platform 
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">Remember me</label>
                </div>
                <a href="#" className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</a>
            </div>
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Not registered? <a className="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
            </div>
          </form>
        </div>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to platform 
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">Remember me</label>
                </div>
                <a href="#" className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</a>
            </div>
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Not registered? <a className="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
            </div>
          </form>
        </div>
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to platform 
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                </div>
                <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">Remember me</label>
                </div>
                <a href="#" className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</a>
            </div>
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Not registered? <a className="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
            </div>
          </form>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <DataFetchingExample />
      </Suspense>
    </section>
  );
};

async function DataFetchingExample() {
  // delay added to demo a (very) slow loading request
  await new Promise((resolve) => setTimeout(resolve, 2500));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      // disable caching
      cache: "no-store",
    },
  );

  if (!response || response.status !== 200) {
    console.error("Failed to fetch data");
  }

  const data = await response.json();
  const firstPost = data[0];
  return (
    <div>
      <p>Todo: {firstPost?.title}</p>
    </div>
  );
}

export default Login;
