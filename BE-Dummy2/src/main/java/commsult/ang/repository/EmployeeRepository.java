package commsult.ang.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import commsult.ang.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByNameContaining(String name);
}