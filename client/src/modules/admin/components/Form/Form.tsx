import { FC } from 'react';

interface FormProps {}

export const Form: FC<FormProps> = () => {
  return (
    <section className="grid grid-cols-2 gap-[10px] p-[10px]">
      <input className="admin-form__input" placeholder="Name" />
      <input className="admin-form__input" placeholder="Type" />
      <input className="admin-form__input" placeholder="Color" />
      <input className="admin-form__input" placeholder="Wheel size" />
      <input className="admin-form__input" placeholder="Price" />
      <input
        className="admin-form__input"
        placeholder="ID (slug): ХХХХХХХХХХХХХ"
      />
      <textarea
        className="admin-form__input col-span-2 h-[75px] resize-none"
        placeholder="Description"
      />
      <button className="bg-mainGrayBg rounded-[5px] px-[22px] py-1 text-white hover:bg-gray-700">
        SAVE
      </button>
      <button className="bg-mainGrayBg rounded-[5px] px-[22px] py-1 text-white hover:bg-gray-700">
        CLEAR
      </button>
    </section>
  );
};
