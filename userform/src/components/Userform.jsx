import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Userform.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Userform() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    sex: yup.string().required("Sex is required"),
    email: yup.string().nullable(),
    age: yup.string().required("Age is required"),
    mobile: yup
      .string()
      .matches(
        /^[6-9]\d{9}$/,
        "Mobile number must be a valid Indian mobile number"
      )
      .nullable(),
    idType: yup.string().nullable(),
    id: yup.string().when("idType", {
      is: "Aadhar",
      then: yup
        .string()
        .matches(/^\d{12}$/, "Govt Id must be a valid 12-digit numeric string")
        .nullable(),
      otherwise: yup
        .string()
        .matches(
          /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,
          "Govt Id must be a valid 10-digit alpha-numeric string"
        )
        .nullable(),
    }),
    emergencyContactNumber: yup
      .string()
      .matches(
        /^[6-9]\d{9}$/,
        "Emergency Contact Number must be a valid Indian mobile number"
      )
      .nullable(),
    guardianTitle: yup.string().nullable(),
    guardianName: yup.string().nullable(),
    address: yup.string().nullable(),
    country: yup.string().nullable(),
    state: yup.string().nullable(),
    pincode: yup.string().nullable(),
    city: yup.string().nullable(),
    occupation: yup.string().nullable(),
    nationality: yup.string().nullable(),
    religion: yup.string().nullable(),
    maritalStatus: yup.string().nullable(),
    bloodGroup: yup.string().nullable(),
  });

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver,
  });

  const [message, setMessage] = useState(null);

  const onSubmithandler = async (data) => {
    await axios
      .post("http://localhost:5000/users", data)
      .then((response) => {
        console.log(response.data);
        reset();
        setMessage("User registered successfully");
      })
      .catch((error) => console.log(error));
    //console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmithandler)}>
        <div>
          <h2 className="form-heading">Personal Details</h2>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
          <label htmlFor="age" className="form-label">
            Age :
          </label>
          <input
            className="form-input"
            type="text"
            {...register("age", { required: true })}
          />
          {errors.age && <p className="form-error">{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="sex" className="form-label">
            Sex :
          </label>
          <input
            className="form-input"
            type="text"
            {...register("sex", { required: true })}
          />
          {errors.sex && <p className="form-error">{errors.sex.message}</p>}
        </div>
        <div>
          <label htmlFor="mobile" className="form-label">
            Mobile:
          </label>
          <input className="form-input" type="text" {...register("mobile")} />
          {errors.mobile && (
            <p className="form-error">{errors.mobile.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="idType" className="form-label">
            ID Type:
          </label>
          <select className="form-select" {...register("idType")}>
            <option value="">Select ID Type</option>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
          </select>
          <label htmlFor="id" className="form-label">
            Govt. ID.
          </label>
          <input className="form-input" type="text" {...register("id")} />
          {errors.id && <p className="form-error">{errors.id.message}</p>}
        </div>
        <h2 className="form-heading">Contact Details</h2>
        <div>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input className="form-input" type="email" {...register("email")} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
          <label htmlFor="emergencyContactNumber" className="form-label">
            Emergency contact number:
          </label>
          <input
            className="form-input"
            type="text"
            {...register("emergencyContactNumber")}
          />
          {errors.emergencyContactNumber && (
            <p className="form-error">
              {errors.emergencyContactNumber.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guardianTitle" className="form-label">
            Guardian Details:
          </label>
          <select className="form-select" {...register("guardianTitle")}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
          <label htmlFor="guardianName" className="form-label">
            Guardian Name
          </label>
          <input
            className="form-input"
            type="text"
            {...register("guardianName")}
          />
          {errors.guardianName && (
            <p className="form-error">{errors.guardianName.message}</p>
          )}
        </div>
        <h2 className="form-heading">Address Details</h2>
        <div>
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input className="form-input" type="text" {...register("address")} />
          {errors.address && (
            <p className="form-error">{errors.address.message}</p>
          )}

          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input className="form-input" type="text" {...register("country")} />
          {errors.country && (
            <p className="form-error">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="state" className="form-label">
            State:
          </label>
          <input className="form-input" type="text" {...register("state")} />
          {errors.state && <p className="form-error">{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="pincode" className="form-label">
            Pincode:
          </label>
          <input className="form-input" type="text" {...register("pincode")} />
          {errors.pincode && (
            <p className="form-error">{errors.pincode.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input className="form-input" type="text" {...register("city")} />
          {errors.city && <p className="form-error">{errors.city.message}</p>}
        </div>

        <h2 className="form-heading">Other Details</h2>
        <div>
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <input
            className="form-input"
            type="text"
            {...register("occupation")}
          />
          {errors.occupation && (
            <p className="form-error">{errors.occupation.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="religion" className="form-label">
            Religion
          </label>
          <select className="form-select" {...register("religion")}>
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Buddhist">Buddhist</option>
          </select>
        </div>
        <div>
          <label htmlFor="marital" className="form-label">
            Marital status
          </label>
          <select className="form-select" {...register("marital")}>
            <option value="">Select status</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
        </div>
        <div>
          <label htmlFor="blood" className="form-label">
            Blood Group
          </label>
          <select className="form-select" {...register("blood")}>
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        </div>
        <div>
          <label htmlFor="nationality" className="form-label">
            Nationality
          </label>
          <input
            className="form-input"
            type="text"
            {...register("nationality")}
          />
          {errors.nationality && (
            <p className="form-error">{errors.nationality.message}</p>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {message && <p>{message}</p>}
      </form>

      <Link className="btn-view" to="http://localhost:3000/userlist">
        <button>View List</button>
      </Link>
    </div>
  );
}

export default Userform;
