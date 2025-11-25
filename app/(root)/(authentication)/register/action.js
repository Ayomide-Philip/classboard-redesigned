import { toast } from "react-toastify";

export default async function RegisterAction(formData) {
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  console.log(name, email, password, confirmPassword);

  if (!name) return toast.error("Name is required");
  if (!email) return toast.error("Email is required");
  if (!password) return toast.error("Password is required");
  if (!confirmPassword) return toast.error("Password is required");

  if (!name.trim().includes(" "))
    return toast.error("Your FullName is required");

  if (name.length < 5)
    return toast.error("Name should be at least 5 characters");
}
