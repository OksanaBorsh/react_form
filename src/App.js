import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    // Скидання значень та запис нових значень в поля
    reset({
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
      login: "", // Очищення поля login
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімум 5 символів!",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>

        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімум 5 символів!",
              },
              maxLength: {
                value: 25,
                message: "Максимум 25 символів!",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
        </div>

        <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Логін повинен містити тільки латинські символи!",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors?.login?.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
