import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { createCabin } from "../../services/apiCabins";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
    const { errors } = formState;
    console.log(errors);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  

  function onSubmit(data) {
    mutate(data)
   
  }

 
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="cabin name"
        error={errors?.name?.message && <Error>{errors.name.message}</Error>}
      >
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="max capacity"
        error={
          errors?.maxCapacity?.message && (
            <Error>{errors.maxCapacity.message}</Error>
          )
        }
      >
        <Input
          type="number"
          id="maxCapacity"
        
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={
          errors?.regularPrice?.message && (
            <Error>{errors.regularPrice.message}</Error>
          )
        }
      >
        <Input
          type="number"
          id="regularPrice"
        
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="discount"
        error={
          errors?.discount?.message && <Error>{errors.discount.message}</Error>
        }
      >
        <Input
          type="number"
          id="discount"
      
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount must be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={
          errors?.description?.message && (
            <Error>{errors.description.message}</Error>
          )
        }
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="cabin photo"
        error={errors?.image?.message && <Error>{errors.image.message}</Error>}
      >
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            // required:  "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>
          Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
