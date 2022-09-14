package commsult.ang.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import commsult.ang.model.Users;
import commsult.ang.repository.UsersRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/ang")
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    @Autowired // untuk sambungin sama repositorynya
    UsersRepository usersRepository;

    @PostMapping("/login")
    public ResponseEntity<List<Users>> LoginUser(@RequestBody Users user) {
        try {
            List<Users> users = new ArrayList<Users>();
            usersRepository.findByusernameAndPassword(user.getUsername(), user.getPassword()).forEach(users::add);

            log.info(users.toString());
            if (users.isEmpty() == false) {
                Users userResult = new Users(user.getID(), user.getUsername(), user.getPassword(), null, null, null,
                        null,
                        null, null,
                        null, null);
                return new ResponseEntity<>(users, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/createUser")
    public ResponseEntity<Users> CreateUser(@RequestBody Users user) {
        try {
            List<Users> users = new ArrayList<Users>();
            usersRepository.findByusernameContaining(user.getUsername()).forEach(users::add);
            log.info(user.toString());
            if (users.isEmpty()) {

                Users _users = usersRepository.save(
                        new Users(null, user.getUsername(), user.getPassword(), null, null, null, null, null, null,
                                null,
                                null));
                return new ResponseEntity<>(_users, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
