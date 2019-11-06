export default function validate(values) {
    let errors = {};
    if (!values.Email) {
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
        errors.Email = "Email address is invalid"
    }
    if (!values.Password) {
        errors.Password = "Password is required"
    } else if (!values.Password.length < 8) {
        errors.Password = "Password must be more than 10 characters"
    }
    return errors;
}
