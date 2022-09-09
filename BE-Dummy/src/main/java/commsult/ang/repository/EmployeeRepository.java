package commsult.ang.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import commsult.ang.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}