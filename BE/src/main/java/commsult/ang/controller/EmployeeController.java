package commsult.ang.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import commsult.ang.exception.DuplicateTutorialException;
import commsult.ang.model.Employee;
import commsult.ang.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	private static final Logger log = LoggerFactory.getLogger(EmployeeController.class);
	@Autowired
	EmployeeRepository employeeRepository;

	@GetMapping("/tutorials")
	public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam(required = false) String title) {
		try {
			List<Employee> tutorials = new ArrayList<Employee>();
			if (title == null)
				employeeRepository.findAll().forEach(tutorials::add);
			else
				employeeRepository.findByNameContaining(title).forEach(tutorials::add);
			if (tutorials.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(tutorials, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/tutorials/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id) {
		Optional<Employee> employeeData = employeeRepository.findById(id);
		if (employeeData.isPresent()) {
			return new ResponseEntity<>(employeeData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/tutorials")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
		try {
			// log.info(employee.toString());
			List<Employee> tutorials = new ArrayList<Employee>();
			employeeRepository.findByNameContaining(employee.getName()).forEach(tutorials::add);
			if (tutorials.isEmpty()) {
				Employee _employee = employeeRepository
						.save(new Employee(employee.getName(), employee.getRole()));
				log.info(_employee.toString());
				return new ResponseEntity<>(_employee, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
				// return new DuplicateTutorialException()
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/tutorials/{id}")
	public ResponseEntity<Employee> updateTutorial(@PathVariable("id") long id, @RequestBody Employee employee) {
		Optional<Employee> employeeData = employeeRepository.findById(id);
		if (employeeData.isPresent()) {
			Employee _employee = employeeData.get();
			_employee.setName(employee.getName());
			_employee.setRole(employee.getRole());
			return new ResponseEntity<>(employeeRepository.save(_employee), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/tutorials/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			employeeRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/tutorials")
	public ResponseEntity<HttpStatus> deleteAllTutorials() {
		try {
			employeeRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}