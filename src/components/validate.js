export default function validate(values) {
    let errors = {};
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (!values.password.length < 10) {
        errors.password = "Password must be more than 10 characters"
    }
    return errors;
}
