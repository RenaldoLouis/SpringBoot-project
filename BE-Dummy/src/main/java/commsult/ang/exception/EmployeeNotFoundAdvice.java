// // if we use this only return literal string not an object with field error
// // or
// // message like default, which the default is better actually

// package commsult.ang.exception;

// import org.springframework.http.HttpStatus;
// import org.springframework.web.bind.annotation.ControllerAdvice;
// import org.springframework.web.bind.annotation.ExceptionHandler;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.ResponseStatus;

// @ControllerAdvice
// class EmployeeNotFoundAdvice {

// @ResponseBody
// @ExceptionHandler(EmployeeNotFoundException.class)
// @ResponseStatus(HttpStatus.NOT_FOUND)
// String employeeNotFoundHandler(EmployeeNotFoundException ex) {
// return ex.getMessage();
// }
// }
