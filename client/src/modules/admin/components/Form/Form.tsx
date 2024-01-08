import { useAddBicycleMutation } from '@admin/repository/bicycle.repository';
import { Bicycle, BicycleSchema } from '@admin/types/bicycle.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface FormProps {}

export const Form: FC<FormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Bicycle>({
    resolver: zodResolver(BicycleSchema),
  });
  const [addBicycle, result] = useAddBicycleMutation();

  if (result.error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    toast.error(result.error.data.message, {
      position: 'bottom-right',
      toastId: 'error',
      draggable: false,
    });
  }

  if (result) {
    toast.success(result.data?.message, {
      position: 'bottom-right',
      toastId: 'createResult',
      draggable: false,
    });
  }

  const onSubmit: SubmitHandler<Bicycle> = (data) => addBicycle(data);
  return (
    <section>
      <form
        className="grid grid-cols-2 gap-[10px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="admin-form__input"
          placeholder="Name"
          type="text"
          {...register('name')}
        />
        <input
          className="admin-form__input"
          placeholder="Type"
          type="text"
          {...register('type')}
        />
        <input
          className="admin-form__input"
          placeholder="Color"
          type="text"
          {...register('color')}
        />
        <input
          className="admin-form__input"
          placeholder="Wheel size"
          {...register('wheelSize')}
        />
        <input
          className="admin-form__input"
          placeholder="Price"
          {...register('price')}
        />
        <input
          className="admin-form__input"
          placeholder="ID (slug): ХХХХХХХХХХХХХ"
          type="text"
          {...register('id')}
        />
        <textarea
          className="admin-form__input col-span-2 h-[75px] resize-none"
          placeholder="Description"
          {...register('description')}
        />
        <button
          className="rounded-[5px] bg-mainGrayBg px-[22px] py-1 text-white hover:bg-gray-700"
          type="submit"
        >
          SAVE
        </button>
        <button
          className="rounded-[5px] bg-mainGrayBg px-[22px] py-1 text-white hover:bg-gray-700"
          type="reset"
        >
          CLEAR
        </button>
      </form>
      <div>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.name?.message ? `Name: ${errors.name?.message}` : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.type?.message ? `Type: ${errors.type?.message}` : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.color?.message ? `Color: ${errors.color?.message}` : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.wheelSize?.message
            ? `Wheel size: ${errors.wheelSize?.message}`
            : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.price?.message ? `Price: ${errors.price?.message}` : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.id?.message ? `ID: ${errors.id?.message}` : null}
        </p>
        <p className="mt-2 text-xs italic text-red-500">
          {errors.description?.message
            ? `Description: ${errors.description?.message}`
            : null}
        </p>
      </div>
    </section>
  );
};
