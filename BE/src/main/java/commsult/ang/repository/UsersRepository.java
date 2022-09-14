package commsult.ang.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import commsult.ang.model.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
    List<Users> findByusernameContaining(String username);

    List<Users> findByusernameAndPassword(String username, String Password);
}
