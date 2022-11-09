import React, { FormEvent } from 'react';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import contactImg from 'assets/contact-image.jpeg';
import { LineGradient } from 'components';
import { Page } from 'enums';
import { ReturnComponentType } from 'types';

interface Form {
  name: string;
  email: string;
  message: string;
}

export const Contacts = (): ReturnComponentType => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const isValid = trigger();

    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section id={Page.Contact} className="py-10">
      <motion.div
        className="flex justify-end w-full mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex justify-end mt-5">
            <LineGradient width="mx-auto w-2/4" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImg} alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={e => onSubmit(e)}
            action={`https://formsubmit.co/${process.env.REACT_APP_USER_EMAIL}`}
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Name"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === 'required' && 'This field id required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: /^[A-X0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === 'required' && 'This field id required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              rows={4}
              cols={50}
              placeholder="Message"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required' && 'This field id required.'}
                {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
