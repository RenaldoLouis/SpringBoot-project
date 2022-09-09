package commsult.ang.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DuplicateTutorialException extends RuntimeException {
    public DuplicateTutorialException(String exception) {
        super(exception);
    }
}
